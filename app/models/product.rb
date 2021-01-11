class Product < ApplicationRecord
    validates :name, uniqueness: true, presence: true
    validates :price, presence: true
    validates :category, presence: true
    validates :image, presence: true
    has_one_attached :image
end
