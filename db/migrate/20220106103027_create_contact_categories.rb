class CreateContactCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :contact_categories do |t|
      t.references :category, null: false, foreign_key: true
      t.references :contact, null: false, foreign_key: true

      t.timestamps
    end
  end
end
