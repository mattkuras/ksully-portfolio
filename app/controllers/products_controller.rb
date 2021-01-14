class ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token

    def index
        products = Product.all
        render json: products
    end

    def create
        product = Product.new(product_params)
        # product.image.attach(io: File.open(params[:image]), filename: params[:image])

        if product.save
            render json: product 
        else
            render json: "there was an error creating your product"
        end
    end
    
    def update
        product = Product.find(params[:id])
        blob = ActiveStorage::Blob.last
        product.image.attach(blob)
        # product.update(image: params[:image])
        product_url = rails_blob_path(product.image)
        render json: { product: product, product_url: product_url}
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