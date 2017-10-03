Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :users, only: [:index, :destroy]
    post '/invitation/send', to: 'invitations#invite'
    post '/invitation/accept', to: 'invitations#accept'
    get 'pullrequests/index/:repo', to: 'pullrequests#index'
    get 'repos/index', to:'repos#index'
    get 'repos/index_contributors/:repo', to: 'repos#index_contributors'
    get 'repos/index_collaborators/:repo', to: 'repos#index_collaborators'
    resource :repos, only: [ :index, :create, :show]
    get 'issues/index', to:'issues#index'
    get 'issues/repo_index', to:'issues#repo_index'
    post 'issues/create', to:'issues#create'
  end
  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
