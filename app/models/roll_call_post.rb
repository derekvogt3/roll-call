class RollCallPost < ApplicationRecord

    belongs_to :a_roll_call

    belongs_to :user

    has_one_attached :photo

    validates :photo, :lat, :lng, :comment, presence: true
    
end
