Rails.application.routes.draw do
  get 'faqs/index'
  get 'faqs/create'
  get 'faqs/update'
  get 'faqs/delete'
  root 'home#index'

  post 'charges', to: 'charges#create'

  delete 'messages/:id', to: 'messages#destroy'
  post 'messages', to: 'messages#create'
  get 'messages', to: 'messages#index'

  post 'products', to: 'products#create'
  get 'products/:id', to: 'products#show'
  get 'products', to: 'products#index'
  patch 'products/attachimage/:id', to: 'products#attach'
  patch 'products/:id', to: 'products#update'
  delete 'products/:id', to: 'products#destroy'

  post '/rails/active_storage/direct_uploads', to: 'direct_uploads#create'

  resource :faqs, only: [:index, :update, :delete, :create]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  get '*path', to: 'home#index', via: :all

end