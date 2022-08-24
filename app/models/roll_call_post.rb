class RollCallPost < ApplicationRecord

    belongs_to :a_roll_call

    belongs_to :users 

    has_one_attached :photo

    validates :photo, :long, :lat, :comment, presence: true
    
end
