class Product < ApplicationRecord
    validates :name, uniqueness: true, presence: true
    validates :price, presence: true
    validates :category, presence: true
    # validates :image, presence: true
    has_one_attached :image

    def image_url
        if self.image.attached? 
            image_url = "https://kyle-sullivan.s3.amazonaws.com/#{self.image.key}"
        end
    end
    
end
