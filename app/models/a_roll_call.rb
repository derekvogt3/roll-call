class ARollCall < ApplicationRecord

    belongs_to :group

    has_many :roll_call_posts, dependent: :destroy
    has_many :users, through: :roll_call_posts
    
    validates :admin, presence: true
    
end
