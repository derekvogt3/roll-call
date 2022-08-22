class CreateGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.boolean :admin

      t.timestamps
    end
  end
end
