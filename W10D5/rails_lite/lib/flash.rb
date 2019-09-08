require 'json'

class Flash
  def initialize(req)
    @flash_now = req.cookies["_rails_lite_app_flash"].nil? ? {} : JSON.parse(req.cookies["_rails_lite_app_flash"])
    @flash = {}
    @now = false
  end

  def [](key)
    key = key.to_s
    @flash[key] || @flash_now[key]
  end

  def []=(key, val)
    key = key.to_s
    if now?
      @now = false
      @flash_now[key] = val
    else
      @flash[key] = val
    end
  end

  def now
    @now = true
    self
  end
  
  def store_flash(res)
    res.set_cookie(
      :_rails_lite_app_flash, {
        path: "/",
        value: @flash.to_json
      }
      )
    end
    
  private
    
  def now?
    @now
  end
end