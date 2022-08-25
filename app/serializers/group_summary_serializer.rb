class GroupSummarySerializer < ActiveModel::Serializer
  attributes :id, :name, :admin, :last_roll_call, :created_at
  has_many :users

  def last_roll_call
    roll_calls = object.a_roll_calls
    if roll_calls.empty?
     return nil
    else 
     return roll_calls.max_by{|rc| rc[:created_at] }[:created_at]
    end
  end
end
