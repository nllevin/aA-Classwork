require 'rails_helper'

feature "CRUDing goals" do
  feature "creating goals" do
    scenario "has a new goal page" do
        visit new_goal_url
        expect(page).to have_content("Add a Goal")
    end

    feature "creating a goal" do
      scenario "shows goal/'s title on goal's #show page" do
        create_new_goal
        expect(page).to have_content(Goal.last.title)
        expect(current_page).to eq("/goals/#{Goal.last.id}")
      end
    end
  end

  feature "viewing goals" do
    scenario "index shows you all of your goals"
    scenario "show page shows you info about one goal"

    feature "private goals" do
      scenario "appear only for self"
      scenario "do not appear for others"
    end
  end

  feature "updating goals" do
    scenario "has an edit goal page"
    feature "updating a goal" do
      scenario "returns you to goal's show page"
    end
  end

  feature "deleteing goals" do
    scenario "removes goal from your page"
  end

end