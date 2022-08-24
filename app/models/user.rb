class User < ApplicationRecord
    
    has_many :userGroups, dependent: :destroy
    has_many :groups, through: :userGroups

    has_many :messages, dependent: :destroy
    has_many :chats, through: :messages

    has_many :roll_call_posts, dependent: :destroy
    has_many :a_roll_calls, through: :groups

    # Hash & salts passwords
    # Links to password_digest column
    has_secure_password
    has_one_attached :avatar

    validates :username, :email, :password, presence: true
    validates :email,:username, uniqueness: true

end
