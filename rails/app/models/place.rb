class Place < ActiveRecord::Base
  attr_accessible :city, :country, :month, :rain, :season, :temperature

  has_many :badges
  has_many :mustsees
end
