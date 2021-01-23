Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :pk_cards
    get 'pokemon_cards/all/:min/:max' => 'pk_cards#index'
    get '/pokemon_cards/all/count' => 'pk_cards#total_cards'

  resources :ygo_cards
  get 'ygo_card/update' => 'ygo_cards#updater'
  post 'database_update' => 'ygo_cards#database_update'

  devise_for :users, controllers: { sessions: 'users/sessions' , registrations: 'users/registrations'}
	 devise_scope :user do
	end


  get '*path', to: 'pages#index', constraints: ->(request) { request.format.html? }
  root to: "pages#index"

end
