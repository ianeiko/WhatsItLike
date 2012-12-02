class CreateMustsees < ActiveRecord::Migration
  def change
    create_table :mustsees do |t|
      t.string :title
      t.text :desc
      t.references :place

      t.timestamps
    end
    add_index :mustsees, :place_id
  end
end
