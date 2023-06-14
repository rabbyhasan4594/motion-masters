import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import './CheckoutForm.css'
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
const CheckoutForm = ({paymentUser}) => {
    
    const {price} =paymentUser;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');



    useEffect(() => {
      if (price > 0) {
          axiosSecure.post('/create-payment-intent', { price })
              .then(res => {
                  
                  setClientSecret(res.data.clientSecret);
              })
      }
  }, [price, axiosSecure])




    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                
            }
            axiosSecure.post('/payment', payment)
                .then(res => {
                  
                     if (res.data.result.insertedId) {
                    //     // display confirm
                    }
                })
         
                fetch(`https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/classesAndInstructors/payment/${paymentUser.selectedId}`, {
                  method: 'PATCH'
              })
              .then(res => res.json())
              .then(data => {
                  
                  if(data.modifiedCount){
                     
                  }
              })
                fetch(`https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/selected/payment/${paymentUser._id}`, {
                  method: 'PATCH'
              })
              .then(res => res.json())
              .then(data => {
                 
                  if(data.modifiedCount){
                       
                  }
              })


        }


    }
    return (
        <div>
            <form className='m-4' onSubmit={(handleSubmit)}>
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
        <button  className='btn btn-info' type="submit" disabled={!stripe ||!clientSecret|| processing}>
          Pay
        </button>
        
      </form>

      {cardError && <p className="text-red-800 m-6">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </div>
      
    );
};

export default CheckoutForm;