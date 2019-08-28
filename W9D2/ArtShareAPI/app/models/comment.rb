# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  artwork_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :artwork,
    class_name: :Artwork,
    primary_key: :id,
    foreign_key: :artwork_id

  has_many :likes, 
    as: :likeable,
    dependent: :destroy

  has_many :likers,
    through: :likes,
    source: :liker   

end
