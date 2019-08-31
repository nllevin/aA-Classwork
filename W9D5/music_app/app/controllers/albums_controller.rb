class AlbumsController < ApplicationController
  before_action :require_login

  def new
    @album = Album.new
    @album.band_id = params[:band_id]
    render :new
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      flash[:success] = "New album added!"
      redirect_to band_url(@album.band_id)
    else
      flash.now[:error] = @album.errors.full_messages
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @album = Album.find_by(id: params[:id])
    if @album
      render :edit
    else
      flash[:error] = "Sorry, album not found."
      redirect_to bands_url
    end
  end

  def show
    @album = Album.find_by(id: params[:id])
    @band = Band.find_by(id: @album.band_id)
    if @album
      render :show
    else
      flash[:error] = "Sorry, album not found."
      redirect_to bands_url
    end
  end

  def update
    @album = Album.find_by(id: params[:id])

    if @album.update(album_params)
      flash[:success] = "Album successfully edited!"
      redirect_to album_url(@album.id)
    else
      flash.now[:error] = @album.errors.full_messages
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @album = Album.find_by(id: params[:id])
    if @album
      flash[:success] = "Album successfully removed!"
      @album.destroy
      redirect_to band_url(@album.band_id)
    else
      flash[:error] = "Sorry, that album was not found."
      redirect_to bands_url, status: 404
    end
  end

  private

  def album_params
    params.require(:album).permit(:title, :year, :live?, :band_id)
  end
end