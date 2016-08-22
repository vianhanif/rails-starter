## Rails app starter

A boilerplate to create a rails app using [Rails 5](http://rubyonrails.org/), [React.js](https://facebook.github.io/react/) and PostgreSQL

#### To get started
Before anything, follow the steps mentioned in [Go Rails](https://gorails.com/setup/), to start using Rails and PostgreSQL.

Then, do this:
```
git clone https://github.com/vianhanif/rails-starter.git
mv rails-starter _your_app_name_
cd _your_app_name_
bundle install
```

#### App Settings
To setup the app to fit your project, go change the database name in  [config/database.yml](https://github.com/vianhanif/rails-starter/blob/master/config/database.yml) and module name in  [config/application.rb](https://github.com/vianhanif/rails-starter/blob/master/config/application.rb)(capitalized) with your project name.

Then, do this:
```
rails db:setup
rails server
```

Lastly, open [localhost:3000](http://localhost:3000) in your browser.

> have fun :grin: ~

## Added libraries
* [active_model_serializers](https://github.com/rails-api/active_model_serializers) (replace [Jbuilder](https://github.com/rails/jbuilder))
* [devise](https://github.com/plataformatec/devise)
* [react-rails](https://github.com/reactjs/react-rails)
* [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
* [bootstrap-datepicker-rails](https://github.com/Nerian/bootstrap-datepicker-rails)
* [fancybox2-rails](https://github.com/kyparn/fancybox2-rails)
* [jasny-bootstrap-rails](https://github.com/maxigs/jasny-bootstrap-rails)
* [will_paginate](https://github.com/mislav/will_paginate)
* [simple_form](https://github.com/plataformatec/simple_form)
* [carrierwave](https://github.com/carrierwaveuploader/carrierwave)
* [carrierwave-base64](https://github.com/lebedev-yury/carrierwave-base64)
* [axlsx_rails](https://github.com/straydogstudio/axlsx_rails)

#### For Development and Test environment:
* [rspec-rails](https://github.com/rspec/rspec-rails)
* [faker](https://github.com/stympy/faker)
* [ffaker](https://github.com/ffaker/ffaker)
* [factory_girl_rails](https://github.com/thoughtbot/factory_girl_rails)
* [rspec-collection_matchers](https://github.com/rspec/rspec-collection_matchers) (in Test only)
* [shoulda-matchers](https://github.com/thoughtbot/shoulda-matchers) (in Test only)

#### For Production environment:
* [rails_12factor](https://github.com/heroku/rails_12factor)
* [puma](https://github.com/puma/puma)

Here's the snippet in the Gemfile
```ruby
gem 'active_model_serializers'
gem 'devise'
gem 'react-rails'
gem 'bootstrap-sass'
gem 'bootstrap-datepicker-rails'
gem 'fancybox2-rails'
gem 'jasny-bootstrap-rails'
gem 'will_paginate'
gem 'simple_form'
gem 'carrierwave'
gem 'carrierwave-base64'
gem 'axlsx_rails'

group :development, :test do
  gem 'byebug'
  gem 'rspec-rails'
  gem 'faker'
  gem 'ffaker'
  gem 'factory_girl_rails'
end

group :test do
  gem 'rspec-collection_matchers'
  gem 'shoulda-matchers'
end

group :production do
  gem 'rails_12factor', '0.0.2'
  gem 'puma',           '~> 3.0'
end
```
