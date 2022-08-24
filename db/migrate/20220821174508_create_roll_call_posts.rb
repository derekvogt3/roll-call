class CreateRollCallPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :roll_call_posts do |t|
      t.integer :a_roll_call_id
      t.integer :user_id
      t.string :photo
      t.float :lng
      t.float :lat
      t.string :comment

      t.timestamps
    end
  end
end
