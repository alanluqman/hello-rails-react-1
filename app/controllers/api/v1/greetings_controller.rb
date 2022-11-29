# class Api::V1::GreetingsController < ApplicationController
#     def index
#     @greeting = Greeting.order(Arel.sql('RANDOM()')).first
#     render json: @greeting
#   end
# end

module Api
  module V1
    class GreetingsController < ApiController
      def index
        @greeting = Greeting.order(Arel.sql('RANDOM()')).first
      end
    end
  end
end
