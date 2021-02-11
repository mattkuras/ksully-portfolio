class CreateFaqs < ActiveRecord::Migration[6.0]
  def change
    create_table :faqs do |t|
      t.text :question
      t.text :content

      t.timestamps
    end
  end
end
