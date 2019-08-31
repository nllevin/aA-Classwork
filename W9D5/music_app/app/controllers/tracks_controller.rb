class TracksController < ApplicationController
  before_action :require_login

  def new
    @track = Track.new
    @track.album_id = params[:album_id]
    @band = Album.find_by(id: params[:album_id]).band
    render :new
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      flash[:success] = "New track added!"
      redirect_to album_url(@track.album_id)
    else
      flash.now[:error] = @track.errors.full_messages
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @track = Track.find_by(id: params[:id])
    if @track
      render :edit
    else
      flash[:error] = "Sorry, track not found."
      redirect_to bands_url
    end
  end

  def show
    @track = Track.find_by(id: params[:id])
    if @track
      render :show
    else
      flash[:error] = "Sorry, track not found."
      redirect_to bands_url
    end
  end

  def update
    @track = Track.find_by(id: params[:id])

    if @track.update(track_params)
      flash[:success] = "Track successfully edited!"
      redirect_to track_url(@track.id)
    else
      flash.now[:error] = @track.errors.full_messages
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @track = Track.find_by(id: params[:id])
    if @track
      flash[:success] = "Track successfully removed!"
      @track.destroy
      redirect_to album_url(@track.album_id)
    else
      flash[:error] = "Sorry, that track was not found."
      redirect_to bands_url
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :ord, :bonus?, :album_id, :lyrics)
  end
end