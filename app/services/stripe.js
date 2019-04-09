const config = require(__base + "app/config/index");
const stripe = require('stripe')(config.stripeSecret);

module.exports = {
    
    saveBillingCard: async (customerId, token) => {
        return await stripe.customers.createSource(customerId, { source: token });
    },
    
    deleteBillingCard: async (customerId, cardId) => {
        return await stripe.customers.deleteCard(customerId, cardId);
    },
    
    setBillingCardAsDefault: async (customerId, cardId) => {
        return await stripe.customers.update(customerId, {default_source: cardId});
    },

    createCustomerByToken: async (token) => {
        return await stripe.customers.create({ source: token });
    },

    getCardById: async (customerId, cardId) => {
        return await stripe.customers.retrieveCard(customerId, cardId);
    },

    makeCharge: async (amount, currency, customer) => {
        const charge = await stripe.charges.create({
            amount: amount,
            currency: currency,
            // source: card,
            customer: customer
            // description: "Charge for jenny.rosen@example.com"
        });

        return charge;
    }
}