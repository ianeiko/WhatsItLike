class Badge < ActiveRecord::Base
  belongs_to :place
  attr_accessible :badge, :desc
end
