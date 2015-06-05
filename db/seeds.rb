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

# tutor
f_name = ["Sarah", "Ryan", "Brian", "Joe", "Michael", "Megan", "Sejeong"]
for index in 0..6
  user = User.new
  user.user_type =2
  user.first_name = f_name[index]
  user.email = user.first_name+"@gmail.com"
  user.password = "heff3030"
  user.availability = "I am available anytime "+["monday", "tuesday", "wednesday", "thursday", "weekend"].sample + " "+ ["after ", "before "].sample + " " +["5", "6", "7"].sample + " pm"
  user.description = "I am "+user.first_name+" and I am really good at "+["Ruby", "Javascript", "Python", "HTML", "CSS", "MongoDB"].sample + ". I am available at "+ user.availability + " but I can be available most of night time via video chat"
  user.address = [94070, "portland, OR", "New York, NY", "95020"].sample
  user.save
end

# student
14.times do
  user = User.new
  user.first_name = ["Brandy", "Sandy", "Melly", "Stweeie", "Joy", "Randy", "Emily", "Danny", "Folly", "Ginny", "Honey", "Jully", "Kelly", "Nelly"]
  user.email = user.first_name+"@gmail.com"
  user.password = "heff3030"
  user.user_type = 1
  user.save
end