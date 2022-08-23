class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :admin
  has_many :users
  has_many :aRollCalls
end
