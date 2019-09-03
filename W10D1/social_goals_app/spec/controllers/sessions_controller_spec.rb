require 'rails_helper'

RSpec.describe SessionsController, type: :controller do

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    it "redirects" do
      user = FactoryBot.create(:user)
      post :create, params: {
        user: {
          username: user.username,
          password: 'hunter2'
        }
      }
      expect(response).to have_http_status(302)
    end
  end

  describe "DELETE #destroy" do
    it "redirects" do
      user = FactoryBot.create(:user)
      session[:session_token] = user.session_token
      delete :destroy
      expect(response).to have_http_status(302)
    end
  end

end
