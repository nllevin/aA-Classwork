class Post < ApplicationRecord
    validates :title, presence: true
    validate :must_have_sub
    
    belongs_to :author, class_name: :User 
    has_many :post_subs, dependent: :destroy
    has_many :subs, through: :post_subs, inverse_of: :posts
    has_many :comments 


    private 

    def must_have_sub
        unless self.subs.length >= 1
            errors[:sub] << "must be present"
        end    
    end

end
