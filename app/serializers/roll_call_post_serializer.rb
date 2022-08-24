class RollCallPostSerializer < ActiveModel::Serializer
  attributes :id, :a_roll_call_id, :user_id, :lat,:lng, :comment
end
