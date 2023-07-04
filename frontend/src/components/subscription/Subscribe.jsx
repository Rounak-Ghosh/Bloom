import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./Subscribe.css";
import { useDispatch, useSelector } from "react-redux";
import { subscribeUser } from "../../actions/SubscribeAction";

let stripePromise
const getStripe = () => {
      if (!stripePromise) {
            stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
      }
      return stripePromise;
};

const Subscribe = ({data}) => {
      const dispatch = useDispatch();
      const {user} = useSelector((state) => state.authReducer.authData);
      const [isUserPaid, setUserPaid] = useState(false);
      const [stripeError, setStripeError] = useState(null);
      const [isLoading, setLoading] = useState(false);
      const item = {
            price: "price_1NPVBXSIS9o0xCxwFRGEhZfC",
            quantity: 1
      };
      const checkoutOptions = {
            lineItems: [item],
            mode: "payment",
            successUrl: `${window.location.origin}`,
            cancelUrl: `${window.location.origin}/cancel`
      };

      const redirectToCheckout = async () => {
            setLoading(true);
            const updatedData = {
                  data: setUserPaid(true)
            }
            const stripe = await getStripe();
            const { error } = await stripe.redirectToCheckout(checkoutOptions);
            console.log("Stripe checkout error", error);
            if (error) setStripeError(error.message);
            if(!error) console.log(stripe);
            setLoading(false);
      };
      if (stripeError) alert(stripeError);

      useEffect(() => {
            const subsribingUser = async () => {
                  setUserPaid(true);
                  console.log(isUserPaid);
                  dispatch(subscribeUser({
                  id: user._id,
                  isPaid: isUserPaid
            }));
            };
            subsribingUser();
      }, [user]);

      return(
            <section>
                  <div className="pricing pricing-palden">
                  <div className="pricing-item">
                        <div className="pricing-deco">
                              <div className="pricing-price"><span className="pricing-currency">&#8377;</span> 29
                              <span className="pricing-period">/ mo</span>
                              </div>
                              <h3 className="pricing-title">Way to BLOOM</h3>
                        </div>
                        <ul className="pricing-feature-list">
                        <li className="pricing-feature">Unlocks Bloom</li>
                        <li className="pricing-feature">High quality content</li>
                        <li className="pricing-feature">Unlimited storage</li>
                        </ul>
                        <button className="pricing-action" onClick={redirectToCheckout} disabled={isLoading}>{isLoading ? "Loading..." : "Subscribe"}</button>
                  </div>
                  </div>
            </section>
            
      );
}

export default Subscribe;

export const Success = () => {
      return (
            <div>
                  <h1>Success</h1>
                  <h2>Thank you for your purchase!</h2>
            </div>
      );
};

export const Cancel = () => {
      return (
            <div>
                  <h1>Cancel</h1>
                  <h2>Your payment was canceled.</h2>
            </div>
      );
};