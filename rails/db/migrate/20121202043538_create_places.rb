class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :city
      t.string :country
      t.integer :month
      t.string :rain
      t.string :season

      t.timestamps
    end
  end
end
