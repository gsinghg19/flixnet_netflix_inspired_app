import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import db from "../firebase_handler";
import { QuerySnapshot } from "firebase/firestore";

function PlansScreens() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapShot) => {
        const products = {};
        querySnapShot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
      });
  }, []);

  return <div>PlansScreens</div>;
}
export default PlansScreens;
