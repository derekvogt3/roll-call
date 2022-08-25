class RollCallPostsController < ApplicationController

    before_action :set_roll_call_post, only:[:show, :destroy]
    
    def index
        render json: RollCallPost.all
    end

    def show
        render json: @rollCallPost
    end

    def create

        new_roll_call = RollCallPost.create!(a_roll_call_id:params[:a_roll_call_id], lat:params[:lat],lng:params[:lng], comment:params[:comment],user_id:session[:user_id])
        blob = ActiveStorage::Blob.create_and_upload!(
            io: StringIO.new((Base64.decode64(params[:photo].split(",")[1]))),
            filename: params[:a_roll_call_id].to_s+"a"+session[:user_id].to_s+".png",
            content_type: "image/png",
          )
        new_roll_call.photo.attach(blob)
        render json: new_roll_call, status: :created
    end

    def destroy
        @rollCallPost.destroy
        head :no_content
    end

    private

    def set_roll_call_post
        @rollCallPost = RollCallPost.find(params[:id])
    end

    def roll_call_post_params
        params.permit(:a_roll_call_id, :user_id, :photo, :lat,:lng, :comment)
    end
    
    def roll_call_post_params_no_user
        params.permit(:a_roll_call_id, :photo, :lat,:lng, :comment)
    end

end
