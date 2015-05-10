class AddTitleDescriptionLinkToCurriculumns < ActiveRecord::Migration
  def change
    add_column :curriculums, :title, :string
    add_column :curriculums, :description, :string
    add_column :curriculums, :url, :string

  end
end
