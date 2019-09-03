require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { FactoryBot.build(:user) }

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:session_token) }
  it { should validate_uniqueness_of(:username) }
  it { should validate_uniqueness_of(:session_token) }
  it { should validate_length_of(:password).is_at_least(6).allow_nil }
  it { should have_many(:goals) }
  it { should have_many(:comments) }
  it { should have_many(:authored_comments) }
  

  describe "#reset_session_token!" do
    it "returns the new session token" do      
      expect(user.reset_session_token!).to eq(user.session_token)
    end 
    
    it "changes the user's session token" do
      old_session_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(old_session_token)
    end   
  end

  describe "::find_by_credentials" do
    before(:each) { user.save }

    context "when given good credentials" do
      it "returns user" do
        username = user.username
        expect(User.find_by_credentials(username, 'hunter2')).to eq(user)
      end
    end
    
    context "when given bad credentials" do
      it "returns nil" do
        username = user.username
        expect(User.find_by_credentials(username, 'hunter3')).to eq(nil)
        expect(User.find_by_credentials("Agumon", 'hunter2')).to eq(nil)
      end
    end
  end

  describe "::generate_session_token" do
    let(:session_token) {User.generate_session_token}
    it "generates a string" do
      expect(session_token).to be_a(String)
    end
  end
  
end
