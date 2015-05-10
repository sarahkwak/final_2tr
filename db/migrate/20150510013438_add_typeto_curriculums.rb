class AddTypetoCurriculums < ActiveRecord::Migration
  def change
    add_column :curriculums, :curriculumn_type, :string
  end
end
