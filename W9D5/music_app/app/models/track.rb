# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  album_id   :integer          not null
#  title      :string           not null
#  ord        :integer          not null
#  lyrics     :text
#  bonus?     :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
  validates :title, presence: true
  validates :ord, 
    presence: { message: "(track number) cannot be blank."}, 
    uniqueness: { 
      scope: :album_id, 
      message: "(track number) should be unique on an album." 
    } 
    
  validates :bonus?, inclusion: [true, false]

  belongs_to :album
  has_one :band, through: :album
end
