Rails.application.routes.draw do

  mount ActionCable.server => '/cable'
  
  scope module: 'api' do
    namespace :v1 do
      resources :articles, only: [:index]
      resources :searches, only: [:index] do
      	collection do
      		get :clear
      	end
    	end
    end
  end
end
