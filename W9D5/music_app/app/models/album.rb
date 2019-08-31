# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  live?      :boolean          default(FALSE), not null
#  band_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :title, :year, presence: true
  validates :live?, inclusion: [true, false]

  belongs_to :band
  has_many :tracks, dependent: :destroy
end
