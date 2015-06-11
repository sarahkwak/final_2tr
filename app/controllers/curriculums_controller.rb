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

  def mongo
    mongo_data = File.read('mongoDB.json')
    parsed_data = JSON.parse(mongo_data)
    parsed_data['mongo']
    i = 0
    while i< parsed_data['mongo'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['mongo'][i]['url']
      curriculum.description = parsed_data['mongo'][i]['description']
      curriculum.title = parsed_data['mongo'][i]['title']
      curriculum.curriculum_type = "mongo"
      curriculum.save
      i+=1
    end
    @mongo = Curriculum.where(curriculum_type: "mongo")
    render json: @mongo
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

  def html
    html_data = File.read('html.json')
    parsed_data = JSON.parse(html_data)
    parsed_data['html']
    i = 0
    while i< parsed_data['html'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['html'][i]['url']
      curriculum.description = parsed_data['html'][i]['description']
      curriculum.title = parsed_data['html'][i]['title']
      curriculum.curriculum_type = "html"
      curriculum.save
      i+=1
    end
    @html = Curriculum.where(curriculum_type: "html")
    render json: @html
  end

  def css
    css_data = File.read('css.json')
    parsed_data = JSON.parse(css_data)
    parsed_data['css']
    i = 0
    while i< parsed_data['css'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['css'][i]['url']
      curriculum.description = parsed_data['css'][i]['description']
      curriculum.title = parsed_data['css'][i]['title']
      curriculum.curriculum_type = "css"
      curriculum.save
      i+=1
    end
    @css = Curriculum.where(curriculum_type: "css")
    render json: @css
  end

  def heroku
    heroku_data = File.read('heroku.json')
    parsed_data = JSON.parse(heroku_data)
    parsed_data['heroku']
    i = 0
    while i< parsed_data['heroku'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['heroku'][i]['url']
      curriculum.description = parsed_data['heroku'][i]['description']
      curriculum.title = parsed_data['heroku'][i]['title']
      curriculum.curriculum_type = "heroku"
      curriculum.save
      i+=1
    end
    @heroku = Curriculum.where(curriculum_type: "heroku")
    render json: @heroku
  end

  def javascript
    javascript_data = File.read('javascript.json')
    parsed_data = JSON.parse(javascript_data)
    parsed_data['javascript']
    i = 0
    while i< parsed_data['javascript'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['javascript'][i]['url']
      curriculum.description = parsed_data['javascript'][i]['description']
      curriculum.title = parsed_data['javascript'][i]['title']
      curriculum.curriculum_type = "javascript"
      curriculum.save
      i+=1
    end
    @javascript = Curriculum.where(curriculum_type: "javascript")
    render json: @javascript
  end


  def python
    python_data = File.read('python.json')
    parsed_data = JSON.parse(python_data)
    parsed_data['python']
    i = 0
    while i< parsed_data['python'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['python'][i]['url']
      curriculum.description = parsed_data['python'][i]['description']
      curriculum.title = parsed_data['python'][i]['title']
      curriculum.curriculum_type = "python"
      curriculum.save
      i+=1
    end
    @python = Curriculum.where(curriculum_type: "python")
    render json: @python
  end

end
