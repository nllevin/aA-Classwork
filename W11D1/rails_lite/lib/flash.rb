require 'json'

class Flash
  def initialize(req)
    @flash_now = req.cookies["_rails_lite_app_flash"].nil? ? {} : JSON.parse(req.cookies["_rails_lite_app_flash"])
    @flash = {}
  end

  def now
    @flash_now
  end

  def [](key)
    key_str = key.to_s
    key_sym = key.to_sym
    @flash_now[key_str] || @flash[key_str] || @flash_now[key_sym] || @flash[key_sym]
  end

  def []=(key, val)
    key = key.to_s
    @flash[key] = val
  end
    
  def store_flash(res)
    res.set_cookie(:_rails_lite_app_flash, {
      path: "/",
      value: @flash.to_json
    })
  end
end

