class CreateChats < ActiveRecord::Migration[7.0]
  def change
    create_table :chats do |t|
      t.boolean :admin
      t.integer :group_id

      t.timestamps
    end
  end
end
