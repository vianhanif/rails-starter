# README

This README would normally document whatever steps are necessary to get the
application up and running.

A starter app to create a rails app using [Rails 5](http://rubyonrails.org/), [React.js](https://facebook.github.io/react/) and PostgreSQL

# To get started
just follow every steps mentioned in [Go Rails](https://gorails.com/setup/) to start using this repo.

# Added libraries
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
* [carrierwave-base64(https://github.com/lebedev-yury/carrierwave-base64)
* [axlsx_rails](https://github.com/straydogstudio/axlsx_rails)

Specificly for Development and Test environment:
* [rspec-rails](https://github.com/rspec/rspec-rails)
* [faker](https://github.com/stympy/faker)
* [ffaker](https://github.com/ffaker/ffaker)
* [factory_girl_rails](https://github.com/thoughtbot/factory_girl_rails)

And lastly for Test-only environment:
* [rspec-collection_matchers (in Test only)](https://github.com/rspec/rspec-collection_matchers)
* [shoulda-matchers (in Test only)](https://github.com/thoughtbot/shoulda-matchers)

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
