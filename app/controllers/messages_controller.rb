class MessagesController < ApplicationController

    before_action :set_message, only: [:show, :destroy]

    def index
        render json: Message.all
    end

    def show
        render json: @message
    end

    def create
        render json: Message.create!(message_params), status: :created
    end

    def destroy
        @message.destroy
        head :no_content
    end

    private

    def set_message
        @message = Message.find(params[:id])
    end

    def message_params
        params.permit(:user_id, :chat_id, :message)
    end

end
