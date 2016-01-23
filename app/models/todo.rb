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

  validates :note, presence: true
  validate :validate_no_buzzwords

  private

  def buzzwords_regex
    /(#{BUZZWORDS.join('|')})/
  end

  def validate_no_buzzwords
    if buzzwords_regex =~ note
      errors.add(:note, 'contains buzzwords! Reconsider your life choices.')
    end
  end
end
