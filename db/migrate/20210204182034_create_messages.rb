class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :subject
      t.text :content

      t.timestamps
    end
  end
end
