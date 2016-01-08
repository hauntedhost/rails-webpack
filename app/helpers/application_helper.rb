module ApplicationHelper
  # webpack dev server injects css
  def webpack_stylesheet_link_tag(*sources)
    Rails.env.in?(%w[staging production]) ? stylesheet_link_tag(*sources) : ''
  end
end
