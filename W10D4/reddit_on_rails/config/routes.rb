Rails.application.routes.draw do
  
  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

  resources :subs, only: [:new, :create, :edit, :update, :show, :index]

  resources :posts, only: [:new, :create, :edit, :update, :show] do
    resources :comments, only: [:new]
  end

  resources :comments, only: [:create]

  root to: "subs#index"

end
