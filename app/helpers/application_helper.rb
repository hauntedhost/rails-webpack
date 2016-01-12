module ApplicationHelper
  # return nothing in development, webpack dev-server injects styles
  def env_stylesheet_link_tag(*sources)
    return if Rails.env.development?
    stylesheet_link_tag(*sources)
  end

  # use full url to webpack dev-server for javascripts in development
  def env_javascript_include_tag(*sources)
    if Rails.env.development?
      filename, *rest = sources
      dev_filename = "http://localhost:3030/dev-assets/#{filename}.js"
      dev_sources = [dev_filename, *rest]
      javascript_include_tag(*dev_sources)
    else
      javascript_include_tag(*sources)
    end
  end
end
