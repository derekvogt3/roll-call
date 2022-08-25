class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def index
        render json: User.all
    end

    def show 
        render json: @current_user
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        render json: @current_user.update!(user_params)
    end
    
    def destroy
        @current_user.destroy
        head :no_content
    end

    def hasPosted?
        hasPosted = current_user.groups.map{|g| g.a_roll_calls.filter{|rc| !rc.roll_call_posts.find_by(user_id: current_user.id)}.to_a}
        
        render json: hasPosted
    end

    def userPosts
        render json: @current_user, serializer: UserShowPostsSerializer
    end

    def addAvatar
        render json: @current_user.update_attribute(:avatar, params[:avatar])
    end
    
    private

    def user_params
        params.permit(:username, :email, :password)
    end
    
end
