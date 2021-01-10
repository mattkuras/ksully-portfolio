Rails.application.routes.draw do
  root 'home#index'
  post 'charges/create', to: 'charges#create'
  post 'products', to: 'products#create'
  get 'products', to: 'products#index'
  get '*path', to: 'home#index', via: :all
end