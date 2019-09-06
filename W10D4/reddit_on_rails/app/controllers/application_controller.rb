class ApplicationController < ActionController::Base
  helper_method :logged_in?
  helper_method :current_user

  private

  def login_user!(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in!
    redirect_to new_session_url unless logged_in?
  end
end
