class ARollCallsController < ApplicationController

  before_action :set_rollCall, only: [:show, :update]

  def index
    render json: ARollCall.all
  end

  def show
    render json: @rollCall
  end  
  
  def create
    render json: ARollCall.create!(admin:session[:user_id],group_id:params[:group_id],end_time:params[:end_time]), status: :created
  end

  def update
    render json: @rollCall.update!(roll_call_params), status: :accepted
  end

  private

  def set_rollCall
    @rollCall = ARollCall.find(params[:id])
  end

  def roll_call_params
    params.permit(:admin, :group_id)
  end

end
