Rails.application.routes.draw do
  root 'application#index'

  namespace :api do
    resources :todos, only: [:create, :index, :update]
  end
end
