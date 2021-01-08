class ChargesController < ApplicationController
    def new
    end

    def create
        customer = Stripe::Customer.create(
            :email => params[:email],
            :card => params[:stripeToken]
        )
        charge = Stripe::Charge.create(
            :customer => customer.id,
            :amount => params[:amount],
            :currency => 'usd'
        )
        rescue Stripe::CardError => e
            flash[:error] = e.message 
        end
    end
end