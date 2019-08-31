class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      flash[:success] = "Welcome back!"
      redirect_to bands_url
    else
      flash.now[:error] = "Sorry, wrong email or password."
      render :new, status: 401
    end
  end

  def destroy
    log_out!
    flash.now[:success] = "Come back soon!"
    render :new
  end
end