class Goal < ApplicationRecord
    validates :user_id, :title, :body, presence: true
    validates :title, uniqueness: {scope: :user_id}, length: { minimum: 6 }
    validates :completed?, :private?, inclusion: {in: [true, false]}

    belongs_to :user
    
    has_many :comments
end
