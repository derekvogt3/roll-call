class Group < ApplicationRecord

    has_many :userGroups, dependent: :destroy
    has_many :users, through: :userGroups

    has_many :aRollCalls, dependent: :destroy
    has_many :rollCallPosts, through: :aRollCalls

    has_one :chat, dependent: :destroy
    has_many :messages, through: :chat

    validates :name, :admin, presence: true
    
end
