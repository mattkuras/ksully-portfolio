Rails.configuration.stripe = {
    :publishable_key => Rails.application.credentials.dig(:stripe, :stripe_publishable_key),
    :secret_key => Rails.application.credentials.dig(:stripe, :stripe_secret_key)

}

Stripe.api_key = Rails.configuration.stripe[:stripe_api_key]