module ApplicationHelper

  def env_stylesheet_link_tag(*sources)
    if Rails.env.in?(%w[staging production])
      stylesheet_link_tag(*sources)
    else
      '' # webpack dev-server injects styles
    end
  end

  def env_javascript_include_tag(*sources)
    if Rails.env.in?(%w[staging production])
      javascript_include_tag(*sources)
    else
      filename, *rest = sources
      dev_sources = ["/dev-assets/#{filename}", *rest]
      javascript_include_tag(*dev_sources)
    end
  end
end
