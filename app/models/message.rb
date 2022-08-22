class Message < ApplicationRecord

    belongs_to :chat
    belongs_to :user

    validates :message, presence: true
    
end
