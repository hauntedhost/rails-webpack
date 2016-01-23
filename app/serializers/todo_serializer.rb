class TodoSerializer < ActiveModel::Serializer
  attributes :id, :note, :completed
end
