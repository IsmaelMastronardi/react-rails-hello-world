class Api::SalutesController < ApplicationController
  def random_greeting
    random_salute = Salute.order('RANDOM()').first
    render json: { greeting: random_salute&.text }
  end
end
