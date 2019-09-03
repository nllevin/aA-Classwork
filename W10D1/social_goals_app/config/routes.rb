Rails.application.routes.draw do
  resources :goals
  resource :session, only: %i(new create destroy)
  resources :users, only: %i[new show create index]
end
