import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import './CheckoutForm.css'
const CheckoutForm = ({user}) => {
    
    
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error,paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }
        else {
            setCardError('');
         console.log('payment method', paymentMethod)
        }

    }
    return (
        <div>
            <form className='m-4' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-info' type="submit" disabled={!stripe}>
          Pay
        </button>
        
      </form>

      {cardError && <p className="text-red-800 m-6">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </div>
      
    );
};

export default CheckoutForm;