# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string           not null
#

class User < ApplicationRecord 
  validates :username, presence: true, uniqueness: true

  has_many :artworks,
    class_name: :Artwork,
    primary_key: :id,
    foreign_key: :artist_id,
    dependent: :destroy 

  has_many :artwork_shares,
    class_name: :ArtworkShare,
    primary_key: :id,
    foreign_key: :viewer_id,
    dependent: :destroy 
  
  has_many :shared_artworks,
    through: :artwork_shares,
    source: :artwork

  has_many :authored_comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :author_id,
    dependent: :destroy

  has_many :likes,
    class_name: :Like,
    primary_key: :id,
    foreign_key: :liker_id,
    dependent: :destroy     

  has_many :liked_comments,
    through: :likes,
    source: :likeable,
    source_type: :Comment    

  has_many :liked_artworks,
    through: :likes,
    source: :likeable,
    source_type: :Artwork         
end
