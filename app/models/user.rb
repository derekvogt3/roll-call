class User < ApplicationRecord
    
    has_many :userGroups, dependent: :destroy
    has_many :groups, through: :userGroups

    has_many :messages, dependent: :destroy
    has_many :chats, through: :messages

    has_many :rollCallPosts, dependent: :destroy
    has_many :rollCalls, through: :rollCallPosts

    # Hash & salts passwords
    # Links to password_digest column
    has_secure_password

    validates :username, :email, :password, presence: true
    validates :email, uniqueness: true

end
