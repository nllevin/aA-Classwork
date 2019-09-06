class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      login_user!(user)
      flash[:success] = "Welcome back #{user.username}!"
      redirect_to subs_url
    else
      flash.now[:error] = "Wrong username or password."
      render :new, status: 401
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    flash[:success] = "Logged out."
    redirect_to new_session_url
  end
end