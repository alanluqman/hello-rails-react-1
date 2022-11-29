# frozen_string_literal: true

# Rails.application.routes.draw do
#   get 'root/index'

#   namespace :api, default: { format: :json } do
#     namespace :v1 do
#       resources :greetings, only: [:index]
#     end
#   end

#   root 'root#index'
# end

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end
  # Defines the root path route ("/")
  root 'root#index'
end
