module ApplicationHelper
  # return nothing in development, webpack dev-server injects styles
  def env_stylesheet_link_tag(*sources)
    return if Rails.env.development?
    stylesheet_link_tag(*sources)
  end

  # prefix development javascript urls with /dev-assets path
  def env_javascript_include_tag(*sources)
    if Rails.env.development?
      filename, *rest = sources
      dev_sources = ["/dev-assets/#{filename}", *rest]
      javascript_include_tag(*dev_sources)
    else
      javascript_include_tag(*sources)
    end
  end
end
