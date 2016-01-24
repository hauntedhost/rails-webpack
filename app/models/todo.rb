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

class Todo < ActiveRecord::Base
  BUZZWORDS = ['synergy', 'thought leader', 'game changer', 'disrupt']
  IMMUTABLES = ['immutable', 'undoable', 'constant']

  validates :note, presence: true
  validate :validate_no_buzzwords
  validate :validate_undo

  private

  def includes_words?(word, words)
    /(#{words.join('|')})/i =~ word
  end

  def validate_undo
    return unless persisted? && completed_changed? && completed == false
    if includes_words?(note, IMMUTABLES)
      errors.add(:todo, 'is immutable and cannot be undone!')
    end
  end

  def validate_no_buzzwords
    if includes_words?(note, BUZZWORDS)
      errors.add(:note, 'contains buzzwords! Reconsider your life choices.')
    end
  end
end
