import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const user = useLoaderData();
   
   
    return (
        <div>
            <Elements stripe={stripePromise}>
            <CheckoutForm key={user._id} paymentUser={user}></CheckoutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;