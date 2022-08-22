class RollCallPostSerializer < ActiveModel::Serializer
  attributes :id, :roll_call_id, :user_id, :photo, :location, :comment
end
