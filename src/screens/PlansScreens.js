import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import db from "../firebase_handler";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { loadStripe } from "@stripe/stripe-js";

function PlansScreens() {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const user = useSelector(selectUser);
  const PUBLISH_KEY = process.env.REACT_APP_API_PUBLISH_TEST.KEY;

  useEffect(() => {
    const docRef = collection(db, "customers", user.uid, "subscriptions");
    getDocs(docRef).then((collSnapShot) => {
      const subscription = {};
      collSnapShot.forEach(async (customerDoc) => {
        subscription[customerDoc.id] = customerDoc.data();
        const subscriptionCollRef = collection(
          customerDoc.ref,
          "subscriptions"
        );
        const subQuerySnapShot = await getDocs(subscriptionCollRef);
        subQuerySnapShot.forEach((subscriptionDoc) => {
          setSubscription({
            role: subscriptionDoc.data().role,
            current_period_end:
              subscriptionDoc.data().current_period_end.seconds,
            current_period_start:
              subscriptionDoc.data().current_period_start.seconds,
          });
        });
      });
      setSubscription(subscription);
    });
  }, [user.uid]);

  useEffect(() => {
    const q = query(collection(db, "products"), where("active", "==", true)); //query cloudstore db for collections and subcollections.
    getDocs(q).then((querySnapShot) => {
      const products = {};
      querySnapShot.forEach(async (productDoc) => {
        products[productDoc.id] = productDoc.data();
        const pricesCollectionRef = collection(productDoc.ref, "prices");
        const pricesQuerySnapshot = await getDocs(pricesCollectionRef);
        pricesQuerySnapshot.forEach((priceDoc) => {
          products[productDoc.id].prices = {
            priceId: priceDoc.id,
            priceData: priceDoc.data(),
          };
        });
      });
      setProducts(products);
    });
  }, []);

  console.log("The products logged are: ", products);
  console.log("Subscription information is: ", subscription);

  const loadCheckOut = async (priceId) => {
    const docRef = await addDoc(
      collection(db, "customers", user.uid, "checkout_sessions"),
      {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );
    onSnapshot(docRef, async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error has occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(PUBLISH_KEY);
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="plansScreen_plan">
            <div className="plansScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              className="PlansScreen_subBtn"
              onClick={() => {
                loadCheckOut(productData.prices.priceId);
              }}
            >
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default PlansScreens;
