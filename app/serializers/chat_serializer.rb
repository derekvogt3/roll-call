class ChatSerializer < ActiveModel::Serializer
  attributes :id, :admin, :group_id
end
