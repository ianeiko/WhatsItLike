class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.integer :badge
      t.text :desc
      t.references :place

      t.timestamps
    end
    add_index :badges, :place_id
  end
end
