class CreateRollCallPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :roll_call_posts do |t|
      t.integer :roll_call_id
      t.integer :user_id
      t.string :photo
      t.float :long
      t.float :lat
      t.string :comment

      t.timestamps
    end
  end
end
