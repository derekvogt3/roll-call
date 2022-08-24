class User < ApplicationRecord
    
    has_many :userGroups, dependent: :destroy
    has_many :groups, through: :userGroups

    has_many :messages, dependent: :destroy
    has_many :chats, through: :messages

    has_many :rollCallPosts, dependent: :destroy
    has_many :aRollCalls, through: :groups

    # Hash & salts passwords
    # Links to password_digest column
    has_secure_password
    has_one_attached :avatar

    # Adds notification functionality via noticed gem
    has_many :notifications, as: :recipient

    validates :username, :email, :password, presence: true
    validates :email,:username, uniqueness: true

end
