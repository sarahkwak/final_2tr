class CurriculumsController < ApplicationController
  attr_reader :python_data, :ruby_data, :html_data, :css_data, :fundamentals_data, :git_data, :heroku_data, :mongo_data, :javascript_data, :jquery_data, :sql_data, :subl_data


  def ruby_data
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
  end

  def ruby
    @ruby = Curriculum.where(curriculum_type: "Ruby")
    if @ruby.length == 0
      ruby_data
      @ruby = Curriculum.where(curriculum_type: "Ruby")
      render json: @ruby
    else
      render json: @ruby
    end
  end

  def jquery_data
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
  end

  def jquery
    @jquery = Curriculum.where(curriculum_type: "jQuery")
    if @jquery.length == 0
      jquery_data
      @jquery = Curriculum.where(curriculum_type: "jQuery")
      render json: @jquery
    else
      render json: @jquery
    end
  end

  # def angular
  #   angular_data = File.read('angular.json')
  #   parsed_data = JSON.parse(angular_data)
  #   parsed_data['angularJS']
  #   i = 0
  #   while i< parsed_data['angularJS'].length
  #     curriculum = Curriculum.new
  #     curriculum.url = parsed_data['angularJS'][i]['url']
  #     curriculum.description = parsed_data['angularJS'][i]['description']
  #     curriculum.title = parsed_data['angularJS'][i]['title']
  #     curriculum.curriculum_type = "AngularJS"
  #     curriculum.save
  #     i+=1
  #   end
  #   @angular = Curriculum.where(curriculum_type: "AngularJS")
  #   render json: @angular
  # end

  def sql_data
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
  end

  def sql
    @sql = Curriculum.where(curriculum_type: "SQL")
    if @sql.length == 0
      sql_data
      @sql = Curriculum.where(curriculum_type: "SQL")
      render json: @sql
    else
      render json: @sql
    end
  end

  def git_data
    git_data = File.read('git.json')
    parsed_data = JSON.parse(git_data)
    parsed_data['git']
    i = 0
    while i< parsed_data['git'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['git'][i]['url']
      # curriculum.description = parsed_data['git'][i]['description']
      curriculum.title = parsed_data['git'][i]['title']
      curriculum.curriculum_type = "Git"
      curriculum.save
      i+=1
    end
  end

  def git
    @git = Curriculum.where(curriculum_type: "Git")
    if @git.length == 0
      git_data
      @git = Curriculum.where(curriculum_type: "Git")
      render json: @git
    else
      render json: @git
    end
  end

  def subl_data
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
  end

  def subl
    @subl = Curriculum.where(curriculum_type: "Sublime")
    if @subl.length == 0
      subl_data
      @subl = Curriculum.where(curriculum_type: "Sublime")
      render json: @subl
    else
      render json: @subl
    end
  end

  def mongo_data
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
  end

  def mongo
    @mongo = Curriculum.where(curriculum_type: "mongo")
    if @mongo.length == 0
      mongo_data
      @mongo = Curriculum.where(curriculum_type: "mongo")
      render json: @mongo
    else
      render json: @mongo
    end
  end

  def fundamentals_data
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
  end

  def fundamentals
    @fundamentals = Curriculum.where(curriculum_type: "Fundamentals")
    if @fundamentals.length == 0
      fundamentals_data
      @fundamentals = Curriculum.where(curriculum_type: "Fundamentals")
      render json: @fundamentals
    else
      render json: @fundamentals
    end
  end

  def html_data
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
  end

  def html
    @html = Curriculum.where(curriculum_type: "html")
    if @html.length == 0
      html_data
      @html = Curriculum.where(curriculum_type: "html")
      render json: @html
    else
      render json: @html
    end
  end

  def css_data
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
  end

  def css
    @css = Curriculum.where(curriculum_type: "css")
    if @css.length == 0
      css_data
      @css = Curriculum.where(curriculum_type: "css")
      render json: @css
    else
      render json: @css
    end
  end

  def heroku_data
    heroku_data = File.read('heroku.json')
    parsed_data = JSON.parse(heroku_data)
    parsed_data['heroku']
    i = 0
    while i< parsed_data['heroku'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['heroku'][i]['url']
      curriculum.title = parsed_data['heroku'][i]['title']
      curriculum.curriculum_type = "heroku"
      curriculum.save
      i+=1
    end
  end

  def heroku
    @heroku = Curriculum.where(curriculum_type: "heroku")
    if @heroku.length == 0
      heroku_data
      @heroku = Curriculum.where(curriculum_type: "heroku")
      render json: @heroku
    else
      render json: @heroku
    end
  end

  def javascript_data
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
  end

  def javascript
   @javascript = Curriculum.where(curriculum_type: "javascript")
    if @javascript.length == 0
      javascript_data
      @javascript = Curriculum.where(curriculum_type: "javascript")
      render json: @javascript
    else
      render json: @javascript
    end
  end

  def python_data
    python_data = File.read('python.json')
    parsed_data = JSON.parse(python_data)
    parsed_data['python']
    i = 0
    while i< parsed_data['python'].length
      curriculum = Curriculum.new
      curriculum.url = parsed_data['python'][i]['url']
      curriculum.title = parsed_data['python'][i]['title']
      curriculum.curriculum_type = "python"
      curriculum.save
      i+=1
    end
  end

  def python
    @python = Curriculum.where(curriculum_type: "python")
    if @python.length == 0
      python_data
      @python = Curriculum.where(curriculum_type: "python")
      render json: @python
    else
      render json: @python
    end
  end

end
