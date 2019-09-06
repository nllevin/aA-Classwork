class Sub < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    
    belongs_to :moderator, class_name: :User 
    has_many :post_subs
    has_many :posts, through: :post_subs, inverse_of: :subs

end
