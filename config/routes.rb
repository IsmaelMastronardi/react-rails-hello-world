Rails.application.routes.draw do
  root 'root#index'
  namespace :api do
    get 'salutes/random', to: 'salutes#random_greeting'
  end
end
