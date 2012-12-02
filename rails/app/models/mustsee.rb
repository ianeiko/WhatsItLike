class Mustsee < ActiveRecord::Base
  belongs_to :place
  attr_accessible :desc, :title
end
