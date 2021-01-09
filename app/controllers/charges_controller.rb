class ChargesController < ApplicationController
    def new
    end


    def create
        session = Stripe::Checkout::Session.create({
            payment_method_types: ['card'],
            line_items: [{
              price_data: {
                currency: 'usd',
                product_data: {
                  name: params[:name],
                },
                unit_amount: params[:unit_amount],
              },
              quantity: params[:quantity],
            }],
            mode: 'payment',
          })
        
          render json: { id: session.id }.to_json
    end

    private
    def charge_params
        params.require(:charge).permit(
            :name,
            :unit_amount,
            :quantity,
        )
    end

end