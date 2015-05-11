# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'JSON'

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