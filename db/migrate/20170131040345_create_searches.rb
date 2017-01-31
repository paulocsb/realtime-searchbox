class CreateSearches < ActiveRecord::Migration[5.0]
  def change
    create_table :searches do |t|
    	t.string :ip_address
      t.string :query
      t.integer :searches_count

      t.timestamps
    end
    add_index :searches, [:created_at]
  end
end
