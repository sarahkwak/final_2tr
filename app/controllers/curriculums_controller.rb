class CurriculumsController < ApplicationController

  def ruby
    json_data = File.read('ruby.json')
    parsed_data = JSON.parse(json_data)
    parsed_data['ruby']
    i = 0
    while i< parsed_data['ruby'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['ruby'][i]['url']
      curriculum.description = parsed_data['ruby'][i]['description']
      curriculum.title = parsed_data['ruby'][i]['title']
      curriculum.curriculum_type = "Ruby"
      curriculum.save
      i+=1
    end
    @ruby = Curriculum.where(curriculum_type: "Ruby")
    render json: @ruby
  end

  def jquery
    jquery_data = File.read('jquery.json')
    parsed_data = JSON.parse(jquery_data)
    parsed_data['jQuery']
    i = 0
    while i< parsed_data['jQuery'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['jQuery'][i]['url']
      curriculum.description = parsed_data['jQuery'][i]['description']
      curriculum.title = parsed_data['jQuery'][i]['title']
      curriculum.curriculum_type = "jQuery"
      curriculum.save
      i+=1
    end
    @jquery = Curriculum.where(curriculum_type: "jQuery")
    render json: @jquery
  end

  def angular
    angular_data = File.read('angular.json')
    parsed_data = JSON.parse(angular_data)
    parsed_data['angularJS']
    i = 0
    while i< parsed_data['angularJS'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['angularJS'][i]['url']
      curriculum.description = parsed_data['angularJS'][i]['description']
      curriculum.title = parsed_data['angularJS'][i]['title']
      curriculum.curriculum_type = "AngularJS"
      curriculum.save
      i+=1
    end
    @angular = Curriculum.where(curriculum_type: "AngularJS")
    render json: @angular
  end

  def sql
    sql_data = File.read('sql.json')
    parsed_data = JSON.parse(sql_data)
    parsed_data['SQL']
    i = 0
    while i< parsed_data['SQL'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['SQL'][i]['url']
      curriculum.description = parsed_data['SQL'][i]['description']
      curriculum.title = parsed_data['SQL'][i]['title']
      curriculum.curriculum_type = "SQL"
      curriculum.save
      i+=1
    end
    @sql = Curriculum.where(curriculum_type: "SQL")
    render json: @sql
  end

  def git
    git_data = File.read('git.json')
    parsed_data = JSON.parse(git_data)
    parsed_data['git']
    i = 0
    while i< parsed_data['git'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['git'][i]['url']
      curriculum.description = parsed_data['git'][i]['description']
      curriculum.title = parsed_data['git'][i]['title']
      curriculum.curriculum_type = "Git"
      curriculum.save
      i+=1
    end
    @git = Curriculum.where(curriculum_type: "Git")
    render json: @git
  end

  def subl
    subl_data = File.read('subl.json')
    parsed_data = JSON.parse(subl_data)
    parsed_data['Sublime']
    i = 0
    while i< parsed_data['Sublime'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['Sublime'][i]['url']
      curriculum.description = parsed_data['Sublime'][i]['description']
      curriculum.title = parsed_data['Sublime'][i]['title']
      curriculum.curriculum_type = "Sublime"
      curriculum.save
      i+=1
    end
    @subl = Curriculum.where(curriculum_type: "Sublime")
    render json: @subl
  end

  def mongo_db
    mongoDB_data = File.read('mongoDB.json')
    parsed_data = JSON.parse(mongoDB_data)
    parsed_data['MongoDB']
    i = 0
    while i< parsed_data['MongoDB'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['MongoDB'][i]['url']
      curriculum.description = parsed_data['MongoDB'][i]['description']
      curriculum.title = parsed_data['MongoDB'][i]['title']
      curriculum.curriculum_type = "MongoDB"
      curriculum.save
      i+=1
    end
    @mongoDB = Curriculum.where(curriculum_type: "MongoDB")
    render json: @mongoDB
  end

  def fundamentals
    fundamentals_data = File.read('fundamentals.json')
    parsed_data = JSON.parse(fundamentals_data)
    parsed_data['fundamentals']
    i = 0
    while i< parsed_data['fundamentals'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['fundamentals'][i]['url']
      curriculum.description = parsed_data['fundamentals'][i]['description']
      curriculum.title = parsed_data['fundamentals'][i]['title']
      curriculum.curriculum_type = "Fundamentals"
      curriculum.save
      i+=1
    end
    @fundamentals = Curriculum.where(curriculum_type: "Fundamentals")
    render json: @fundamentals
  end

end
