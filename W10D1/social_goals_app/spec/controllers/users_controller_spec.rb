require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    it "returns http success" do
      post :create, params: { user: { username: "Articuno", password: "hunter2" } }
      expect(response).to have_http_status(302)
      expect(response).to redirect_to(user_url(User.last))
    end
  end

  describe "GET #show" do
    it "returns http success" do
      user = FactoryBot.create(:user)
      get :show, params: { id: user.id }
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

end
