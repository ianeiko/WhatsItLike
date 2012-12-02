class MustseesController < ApplicationController
  def create
    @place = Place.find(params[:place_id])
    @mustsee = @place.mustsees.create(params[:mustsee])
    redirect_to place_path(@place)
  end
end
