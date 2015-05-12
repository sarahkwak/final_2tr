class CurriculumsController < ApplicationController

def ruby
  @ruby = Curriculum.where(curriculum_type: "Ruby")
  render json: @ruby
end

def jquery
  @jquery = Curriculum.where(curriculum_type: "jQuery")
  render json: @jquery
end

def angular
  @angular = Curriculum.where(curriculum_type: "AngularJS")
  render json: @angular
end

def sql
  @sql = Curriculum.where(curriculum_type: "SQL")
  render json: @sql
end

def git
  @git = Curriculum.where(curriculum_type: "Git")
  render json: @git
end

def subl
  @subl = Curriculum.where(curriculum_type: "Sublime")
  p "*" * 100
  p @subl
  render json: @subl
end
end
