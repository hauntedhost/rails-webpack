# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  note       :text             not null
#  completed  :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TodoSerializer < ActiveModel::Serializer
  attributes :id, :note, :completed
end
