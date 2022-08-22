class Chat < ApplicationRecord

    belongs_to :group

    has_many :messages, dependent: :destroy
    has_many :users, through: :messages
    
    validates :admin, presence: true 
    
end
