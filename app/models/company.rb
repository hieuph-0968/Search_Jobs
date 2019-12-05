class Company < ApplicationRecord
  has_many :suggests, dependent: :destroy
  has_many :jobs, dependent: :destroy
end
