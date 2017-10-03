# Admin
User.create(
  email: 'test@test.com',
  name: 'DevPoint Studios',
  password: 'password',
  username: 'devpointstudio',
  role: 'admin'
)

puts "admin added email: test@test.com password: password"

#Devs or Observer
20.times do
  User.create(
    email: Faker::Internet.email,
    password: 'password',
    username: Faker::Name.first_name,
    name: Faker::Name.name,
    invitation_accepted_at: Faker::Boolean.boolean,
    role: ['dev', 'observer'].sample
  )
end

puts "Devs/Observer seeded"
