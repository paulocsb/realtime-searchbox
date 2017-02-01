Rails.application.config.middleware.use Rack::Attack

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
    resource '*', :headers => :any, :methods => [:get, :delete, :options]
  end
end
