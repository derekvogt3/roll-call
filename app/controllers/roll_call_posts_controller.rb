class RollCallPostsController < ApplicationController

    before_action :set_roll_call_post, only[:show, :destroy]
    
    def index
        render json: RollCallPost.all
    end

    def show
        render json: @rollCallPost
    end

    def create
        # rollCall = RollCallPost.create!(params[:roll_call_id, :user_id, :location, :comment])
        # rollCall.photo.attach(params[:photo])
        # render json: rollCall, status: :created
        
        render json: RollCallPost.create!(roll_call_post_params), status: :created
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
        params.permit(:roll_call_id, :user_id, :photo, :location, :comment)
    end

end
