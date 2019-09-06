class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      flash[:success] = "Welcome to Reddit on Rails! Account created!"
      redirect_to subs_url
    else
      flash.now[:error] = @user.errors.full_messages
      render :new, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end