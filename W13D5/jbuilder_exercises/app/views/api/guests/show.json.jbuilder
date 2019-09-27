json.partial! 'api/guests/guest', guest: @guest
json.gifts do 
  json.array! @guest.gifts do |gift|
    json.partial! 'api/gifts/gift', gift: gift
  end
end