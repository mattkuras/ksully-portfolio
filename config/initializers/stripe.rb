Rails.configuration.stripe = {
    :publishable_key => ENV['PUBLISHABLE_KEY'],
    :secret_key => ENV['SECRET_KEY']

}

# Stripe.api_key = Rails.application.credentials.stripe[:stripe_api_key]
Stripe.api_key = Rails.configuration.stripe[:secret_key]
# Stripe.api_key = Rails.application.credentials.stripe[:stripe_secret_key]