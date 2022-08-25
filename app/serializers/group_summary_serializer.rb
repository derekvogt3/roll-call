class GroupSummarySerializer < ActiveModel::Serializer
  attributes :id, :name, :admin, :last_roll_call, :created_at
  has_many :users
end
