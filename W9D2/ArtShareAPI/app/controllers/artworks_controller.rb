class ArtworksController < ApplicationController

  def create
    artwork = Artwork.new(artwork_params)
    if artwork.save
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    artwork = Artwork.find(params[:id])
    if artwork.destroy
      render json: artwork
    else
      render json: artworks.errors.full_messages, status: 400
    end
  end

  def index
    user = User.find(params[ :user_id ])
    artworks = user.artworks + user.shared_artworks  
    render json: artworks
  end

  def show
    render json: Artwork.find(params[:id])
  end

  def update
    artwork = Artwork.find(params[:id])
    if artwork.update(artwork_params)
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def artwork_params
    params.require(:artwork).permit(:title, :artist_id, :image_url)
  end
end