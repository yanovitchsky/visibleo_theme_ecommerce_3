source 'https://rubygems.org'

# ruby '1.9.3'

gem 'locomotivecms_wagon', :git => 'git@5.135.50.214:cms-local-wagon-engine.git'
gem 'locomotivecms_mounter',          git: 'git@5.135.50.214:cms-local-mounter-engine.git'
gem 'visibleo_locomotivecms',          git: 'git@5.135.50.214:cms-gem-attributes-bridge.git'

group :development do
  # Mac OS X
  gem 'rb-fsevent', '~> 0.9.1', require: RUBY_PLATFORM.include?('darwin') && 'rb-fsevent'

  # Unix
  gem 'therubyracer', require: 'v8', platforms: :ruby
  gem 'rb-inotify', '~> 0.9', require: RUBY_PLATFORM.include?('linux') && 'rb-inotify'

  # Windows
  gem 'wdm', '>= 0.1.0', require: RUBY_PLATFORM =~ /mswin|mingw/i && 'wdm'
end

group :misc do
  # Add your extra gems here
  # gem 'susy', require: 'susy'
  # gem 'redcarpet', require: 'redcarpet'
end
