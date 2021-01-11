class ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token

    def index
        products = Product.all
        render json: products
    end

    def create
        product = Product.new(product_params)
        if product.save
            render json: product 
        else
            render json: "there was an error creating your product"
        end
    end

    private 
    def product_params
        params.require(:product).permit(
            :name,
            :price,
            :category,
            :image
        )
    end

end