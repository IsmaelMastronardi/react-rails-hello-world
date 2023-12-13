class CreateSalutes < ActiveRecord::Migration[7.1]
  def change
    create_table :salutes do |t|
      t.string :text
      t.timestamps
    end
  end
end
