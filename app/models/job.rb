class Job < ApplicationRecord
  belongs_to :user
  belongs_to :company
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :reports, dependent: :destroy
  validates :user_id, presence: true
  validates :company_id, presence: true
  validates :content, presence: true, length: {maximum: 250}
end
