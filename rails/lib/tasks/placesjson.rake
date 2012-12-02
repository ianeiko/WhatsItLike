
namespace :dbread do

  desc "places json"
  task :get_json => :environment do


    places = Place.find(:all, :conditions => { :city => "Bali" })
    
    places.each do |p|
      puts "Place: " + p.city
      badges = Badge.find(:all, :conditions => { :place_id => p.id })
      
      badges.each do |b|
        puts "Badge: " + b.badge.to_s
      end
      
      puts "json: " + @p.to_json.to_s

    end

  end

end

