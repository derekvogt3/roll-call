class CreateARollCalls < ActiveRecord::Migration[7.0]
  def change
    create_table :a_roll_calls do |t|
      t.integer :admin
      t.integer :group_id
      t.datetime :end_time
      t.timestamps
    end
  end
end
