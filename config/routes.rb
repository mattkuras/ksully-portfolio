Rails.application.routes.draw do
  root 'home#index'
  post 'charges/create', to: 'charges#create'
  post 'products', to: 'products#create'
  get 'products', to: 'products#index'
  patch 'products/:id', to: 'products#update'
  get '*path', to: 'home#index', via: :all
  post '/rails/active_storage/direct_uploads', to: 'direct_uploads#create'
end