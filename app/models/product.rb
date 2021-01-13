class Product < ApplicationRecord
    validates :name, uniqueness: true, presence: true
    validates :price, presence: true
    validates :category, presence: true
    # validates :image, presence: true
    has_one_attached :image

    def image_url
        if self.image.attached? 
            image_url = Rails.application.routes.url_helpers.rails_blob_path(self.image) 
        end
    end
    
end
