class ChangeColumnInFaqs < ActiveRecord::Migration[6.0]
  def change
    rename_column :faqs, :content, :answer
  end
end
