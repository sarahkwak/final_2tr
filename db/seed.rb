# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Question.create(title: "hello")
# require 'JSON'

# json_data = File.read('ruby.json')
# p json_data
# parsed_data = JSON.parse(json_data)
# p "*" * 100
# p parsed_data['ruby']
# parsed_data['ruby']
# i = 0
# while i< parsed_data['ruby'].length
#   curriculum = Curriculum.create!(url: parsed_data['ruby'][i]['url'], description: parsed_data['ruby'][i]['description'], title:parsed_data['ruby'][i]['title'], curriculum_type: "Ruby")
#   i+=1
# end

# Curriculum.create!(curriculum_type: "Ryby", title: "CodeAcademy, Ruby", url: "http://www.codecademy.com/en/tracks/ruby", description: "Learn to program in Ruby, a ﬂexible language used to create sites like Codecademy")

# a = {"ruby"=>[1, 2, 3, 4, 5]}
# a.each do |key, value|
#   for i in 0..(value.length-1)
#     puts value[i]
#   end
# end