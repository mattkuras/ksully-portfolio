class ChargesController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def new
  end

  def create
    session = Stripe::Checkout::Session.create({
      shipping_address_collection: {
        allowed_countries: ['US', 'CA']
      },
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "usd",
          product_data: {
            name: params[:name],
          },
          unit_amount: params[:unit_amount],
        },
        quantity: params[:quantity],
      }],
      mode: "payment",

      success_url: "https://www.facebook.com",
      cancel_url: "https://example.com/cancel",
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
