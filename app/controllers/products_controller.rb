class ProductsController < ApplicationController
#   skip_before_action :verify_authenticity_token

    def index
        products = Product.all
        render json: products.to_json(methods: [:image_url])
    end

    def show
        product = Product.find(params[:id])
        render json: product.to_json(methods: [:image_url])

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

    def destroy
        product = Product.find(params[:id])
        product.destroy 
        render json: 'product has been deleted from dashboard'
    end

    def update 
        product = Product.find(params[:id])
        product.update(product_params)
        if product.save?
            render json: 200
        else 
            render json: 'there was an error saving poduct. maybe try deleting it and recreating'
        end
    end

    def attach
        product = Product.find(params[:id])
        product.image.attach(params[:image])
        render json: product.to_json(methods: [:image_url])
    end

    private 
    def product_params
        params.require(:product).permit(
            :name
        )
    end

end