require 'erb'

class ShowExceptions
  attr_reader :app

  def initialize(app)
    @app = app
  end

  def call(env)
    app.call(env)
  rescue => e
    render_exception(e)
  end

  private
  
  def render_exception(e)
    # craft response by hand:
    # body = []
    # status = '500'
    # headers = {'Content-type' => 'text/html'}
    # body << e.message
    # body << e.backtrace
    # [status, headers, body]

    # use Rack::Response and render
    res = Rack::Response.new
    res.status = 500
    res['Content-Type'] = 'text/html'

    @e = e

    match_data = /(.+):(\d+)/.match(e.backtrace.first)
    @error_path, @line_number = match_data[1..2]
    @line_number = @line_number.to_i
    @code_snippet = File.readlines(@error_path)[@line_number - 2..@line_number]

    file_path = File.join(
      "#{File.dirname(__FILE__)}",
      "templates",
      "rescue.html.erb"
    )
    template = File.read(file_path)
    content = ERB.new(template).result(binding)
    res.write(content)
    res.finish
  end

end
