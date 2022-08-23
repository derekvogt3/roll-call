class UserGroupsController < ApplicationController

    before_action :set_user_group, only: [:show, :update, :destroy]

    def index
        render json: UserGroup.all
    end

    def show
        render json: @userGroup 
    end

    def create
        render json: UserGroup.create!(user_group_params), status: :created 
    end

    def update
        render json: @userGroup.update!(user_group_params), status: :accepted
    end

    def destroy
        @userGroup.destroy
        head :no_content
    end

    private

    def set_user_group
        @userGroup = UserGroup.find(params[:id])
    end

    def user_group_params
        params.permit(:user_id, :group_id)
    end
    
end
