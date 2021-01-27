Rails.configuration.stripe = {
    :publishable_key => Rails.application.credentials.dig(:stripe, :stripe_publishable_key),
    :stripe_api_key => Rails.application.credentials.dig(:stripe, :stripe_api_key)

}

# Stripe.api_key = Rails.application.credentials.stripe[:stripe_api_key]
Stripe.api_key = Rails.configuration.stripe[:stripe_api_key]