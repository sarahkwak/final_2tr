class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :title
      t.text :content
      t.references :user
      t.belongs_to :question

      t.timestamps null: false
    end
  end
end
