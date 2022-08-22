class RollCallPost < ApplicationRecord

    belongs_to :ARollCall

    has_many :users 

    has_one_attached :photo

    validates :photo, :location, :comment, presence: true
    
end
