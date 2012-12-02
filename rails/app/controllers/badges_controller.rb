class BadgesController < ApplicationController
  def create
    @place = Place.find(params[:place_id])
    @badge = @place.badges.create(params[:badge])
    redirect_to place_path(@place)
  end

  def index
  end
end
