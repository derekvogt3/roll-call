class ARollCallSerializer < ActiveModel::Serializer
  
  attributes :id, :admin, :group_id, :created_at,:end_time
  has_many :roll_call_posts
end
