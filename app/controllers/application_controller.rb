class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActiveStorage::Blob::Analyzable 
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  
  before_action :authorize

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def authorize
    unless @current_user
      render json: { errors: "Not authorized" }, status: :unauthorized 
    end
  end

  def render_record_not_found error
    render json: { error: error.message }, status: :not_found
  end
  
  def render_unprocessable_entity invalid
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
