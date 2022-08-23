class SessionController < ApplicationController

    skip_before_action :authorize, only: [:create, :show, :destroy]

    # Login
    def create
        user = User.find_by(username: params[:username])
        # Check user exsits & password is correct
        if user&.authenticate(params[:password])
            # Store user ID in session cookie
            session[:user_id] = user.id
            render json: user
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    # Logged in user
    def show 
        # Grab user class var from application_controller
        if current_user
            render json: current_user
        else
            render json: { message: "You must be logged in" }, status: :unauthorized
        end
    end

    # Logout
    def destroy
        session.delete :user_id
        head :no_content
    end
    
end
