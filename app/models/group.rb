class Group < ApplicationRecord

    has_many :userGroups, dependent: :destroy
    has_many :users, through: :userGroups

    has_many :rollCalls, dependent: :destroy
    has_many :rollCallPosts, through: :rollCalls

    has_one :chat, dependent: :destroy
    has_many :messages, through: :chat

    validates :name, :admin, presence: true
    
end
