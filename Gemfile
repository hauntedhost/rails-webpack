source 'https://rubygems.org'

gem 'rails', '4.2.5'
ruby '2.3.0'

gem 'active_model_serializers', '0.8.3'
gem 'foreman'
gem 'pg', '~> 0.15'

group :development do
  gem 'web-console', '~> 2.0'
end

group :development, :test do
  gem 'annotate'
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'rspec-rails'
end

group :production, :staging do
  gem 'rails_12factor'
  gem 'rails_serve_static_assets'
  gem 'rspec-rails'
  gem 'sprockets-redirect'
end
