require 'active_support'
require 'active_support/core_ext'
require 'active_support/inflector'
require 'erb'
require_relative './session'
require_relative 'flash'
require 'byebug'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res, route_params = {})
    @req, @res, @params = req, res, req.params.merge(route_params)
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response ||= false
  end

  # Set the response status code and header
  def redirect_to(url)
    raise "No Double Render!!" if already_built_response?
    session.store_session(res)
    flash.store_flash(res)
    res.status = 302
    res.location = url
    @already_built_response = true 
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    raise "No Double Render!!" if already_built_response?
    session.store_session(res)
    flash.store_flash(res)
    res["Content-Type"] = content_type
    res.write(content)
    @already_built_response = true 
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    file_path = File.join(
      "#{File.dirname(File.dirname(__FILE__))}", #documents/aA-Homeworks/W10D5/rails_lite/bin/p03.......
      "views",
      "#{self.class.to_s.underscore}",
      "#{template_name}.html.erb"
    )
    template = File.read(file_path)
    content = ERB.new(template).result(binding)
    render_content(content, "text/html")
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(req)
  end

  def flash
    @flash ||= Flash.new(req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    self.send(name)
    render(name) unless already_built_response?
  end
end