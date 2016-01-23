Rails.application.routes.draw do
  root 'application#index'

  namespace :api do
    resources :todos, only: [:index]
  end
end
