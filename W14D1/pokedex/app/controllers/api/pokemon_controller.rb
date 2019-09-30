class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end
  
  def create
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.save
      render :show
    else
    end
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :moves, :poke_type, :image_url)
  end
end