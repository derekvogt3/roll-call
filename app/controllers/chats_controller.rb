class ChatsController < ApplicationController

    before_action :set_chat, only: [:show, :update, :destroy]

    def index 
        render json: Chat.all
    end

    def show
        render json: @chat
    end

    def create
        render json: Chat.create!(chat_params), status: :created
    end

    def update
        render json: @chat.update(admin: params[:admin]), status: :accepted
    end

    private

    def set_chat
        @chat = Chat.find(params[:id])
    end

    def chat_params
        params.permit(:admin, :group_id)
    end

end
