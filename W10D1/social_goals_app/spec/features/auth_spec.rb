require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do
    visit new_user_url
    expect(page).to have_content('Sign Up')
  end

  feature 'signing up a user' do
    scenario 'shows username on the homepage after signup' do
      sign_up_user('Articuno')
      expect(page).to have_content('Articuno')
      expect(current_path).to eq("/users/#{User.find_by(:username => 'Articuno').id}")
    end

  end
end

feature 'logging in' do
  scenario 'shows username on the homepage after login' do
    sign_in_user
    expect(page).to have_content(User.last.username)
    expect(current_path).to eq("/users/#{User.last.id}")
  end

end

feature 'logging out' do
  scenario 'begins with a logged out state' do
    visit users_url
    expect(page).to have_content("Create an Account")
  end

  scenario 'doesn\'t show username on the homepage after logout' do
    sign_in_user
    click_on("Log Out")
    expect(page).to_not have_content(User.last.username)
  end

end