Rails.application.routes.draw do
  root 'home#index'

  post 'charges/create', to: 'charges#create'

  post 'products', to: 'products#create'
  get 'products/:id', to: 'products#show'
  get 'products', to: 'products#index'
  patch 'products/attachimage/:id', to: 'products#attach'
  patch 'products/:id', to: 'products#update'
  destroy 'products/:id', to: 'products#destroy'

  post '/rails/active_storage/direct_uploads', to: 'direct_uploads#create'

  get '*path', to: 'home#index', via: :all

end