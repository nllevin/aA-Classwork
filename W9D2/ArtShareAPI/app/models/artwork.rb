# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
  validates :title, :image_url, presence: true
  validates :artist_id, uniqueness: { scope: :title,
    message: "should only have one work with a given title" }

  belongs_to :artist,
    class_name: :User,
    primary_key: :id,
    foreign_key: :artist_id

  has_many :shares,
    class_name: :ArtworkShare,
    primary_key: :id,
    foreign_key: :artwork_id
    
  has_many :shared_viewers,
    through: :shares,
    source: :viewer

  has_many :comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :artwork_id,
    dependent: :destroy

  has_many :likes, 
    as: :likeable,
    dependent: :destroy  

  has_many :likers,
    through: :likes,
    source: :liker       
end
