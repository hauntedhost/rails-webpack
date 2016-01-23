# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  note       :text
#  completed  :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Todo < ActiveRecord::Base
end
