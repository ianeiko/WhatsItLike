class AddTempToCity < ActiveRecord::Migration
  def change
    add_column :places, :temperature, :integer
  end
end
