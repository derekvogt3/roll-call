class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :admin, :last_roll_call
  # has_many :users
  has_many :aRollCalls
  has_many :users

  def last_roll_call
    roll_calls = object.aRollCalls
    if roll_calls.empty?
     return nil
    else 
     return roll_calls.max_by{|rc| rc[:created_at] }[:created_at]
    end
  end
end
