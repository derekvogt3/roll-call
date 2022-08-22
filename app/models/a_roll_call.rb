class ARollCall < ApplicationRecord

    belongs_to :group

    has_many :rollCallPosts, dependent: :destroy
    has_many :users, through: :rollCallPosts
    
    validates :admin, presence: true
    
end
