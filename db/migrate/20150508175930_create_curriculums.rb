  class CreateCurriculums < ActiveRecord::Migration
  def change
    create_table :curriculums do |t|
      t.string :title, :description, :url, :curriculum_type

      t.timestamps null: false
    end
  end
end
