# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'
# puts "Clearing db..."
# User.destroy_all
# Group.destroy_all
# UserGroup.destroy_all

# # create users

puts "making users"
20.times{User.create!(username:Faker::Internet.username(specifier: 5..10),
                    email:Faker::Internet.email,
                    password:"testpass123")}


# puts "making groups"

# 5.times{Group.create!(name:Faker::Hipster.sentence,admin:User.all.sample.id)}

# puts "making user_groups"
# 30.times{UserGroup.create!(user:User.all.sample ,group: Group.all.sample)}

# puts "making roll-calls"

# 20.times{}

