class GroupsController < ApplicationController

    before_action :set_group, only: [:show, :update, :destroy]
    
    def index
        render json: Group.all
    end

    def show
        render json: @group    
    end

    def create
        render json: Group.create!(group_params), status: :created
    end

    def update  
        render json: @group.update!(group_params), status: :accepted
    end

    def destroy
        @group.destroy
        head :no_content
    end

    private

    def set_group
        @group = Group.find(params[:id])
    end

    def group_params
        params.permit(:name, :admin)
    end

end
