class UserShowPostsSerializer < ActiveModel::Serializer
  
  attributes :id, :username, :email, :avatar_url, :bio

  has_many :roll_call_posts

  def avatar_url
    if object.avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.avatar, host: "storage")
    end
  end
  
end
