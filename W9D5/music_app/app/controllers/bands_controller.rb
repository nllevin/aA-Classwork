class BandsController < ApplicationController
  before_action :require_login

  def index
    @bands = Band.all
    render :index
  end

  def create
    @band = Band.create(band_params)

    if @band.save
      flash[:success] = "New band added!"
      redirect_to band_url(@band.id)
    else
      flash.now[:error] = "Band must have a name."
      render :new, status: :unprocessable_entity
    end
  end

  def new
    @band = Band.new
    render :new
  end

  def edit
    @band = Band.find_by(id: params[:id])
    if @band
      render :edit
    else
      flash[:error] = "Sorry, band not found."
      redirect_to bands_url
    end
  end

  def show
    @band = Band.find_by(id: params[:id])
    if @band
      render :show
    else
      flash[:error] = "Sorry, band not found."
      redirect_to bands_url
    end
  end

  def update
    @band = Band.find_by(id: params[:id])

    if @band.update(band_params)
      flash[:success] = "Band successfully edited!"
      redirect_to band_url(@band.id)
    else
      flash.now[:error] = "Band must have a name."
      render :edit, status: :unprocessable_entity
    end
  end
  
  def destroy
    @band = Band.find_by(id: params[:id])
    if @band
      flash[:success] = "Band successfully removed!"
      @band.destroy
      redirect_to bands_url
    else
      flash[:error] = "Sorry, that band was not found."
      redirect_to bands_url
    end

  end

  private

  def band_params
    params.require(:band).permit(:name)
  end
end