Rails.application.routes.draw do
  root 'home#index'
  get '*path', to: 'home#index', via: :all
  post 'charges/create', to: 'charges#create'
end