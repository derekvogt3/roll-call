class RollCallPostSerializer < ActiveModel::Serializer
  attributes :id, :a_roll_call_id, :user_id, :lat,:lng, :comment,:photo_url
  belongs_to :user

  def photo_url
    if object.photo.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.photo, host: "storage")
    end
  end

end
