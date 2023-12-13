Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://[::1]:3000'

    resource '/api/salutes/random', headers: :any, methods: [:get]
  end
end