class Group < ApplicationRecord

    has_many :user_groups, dependent: :destroy
    has_many :users, through: :user_groups

    has_many :a_roll_calls, dependent: :destroy
    has_many :roll_call_posts, through: :a_roll_calls

    has_one :chat, dependent: :destroy
    has_many :messages, through: :chat

    validates :name, :admin, presence: true
    
end
