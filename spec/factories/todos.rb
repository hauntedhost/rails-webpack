FactoryGirl.define do
  factory :todo do
    note { Faker::Hacker.say_something_smart }
  end
end
