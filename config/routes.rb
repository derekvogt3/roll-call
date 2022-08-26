Rails.application.routes.draw do
  
  resources :messages, only: [:index, :show, :create, :destroy]
  resources :a_roll_calls, only: [:index, :show, :create, :update]
  resources :chats, only: [:index, :show, :create, :update]
  resources :roll_call_posts, only: [:index, :show, :create, :destroy]
  resources :groups
  resources :user_groups
  resources :users

  # Login user
  post "/login", to: "session#create"
  # Kepp user logged in 
  get "/me", to: "session#show"
  # Logout user
  delete "/logout", to: "session#destroy"
  # Check user permissions
  get "/auth", to: "users#show"

  # Add/change user's avatar and/or bio
  patch "/users/info/:id", to: "users#updateInfo"
  
  # Get user & their posts
  get 'posts/user/:id', to: "users#userPosts"
  
  # Check for notifications
  get '/user/groups/posted', to: "users#hasPosted?"
  
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  # added to direct routes to react if they aren't associated with an api
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
