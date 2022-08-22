class UserController < ApplicationController

    skip_before_action :authorize, only: [:create]

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
    
    private

    def user_params
        params.permit(:name, :email, :password)
    end
    
end
