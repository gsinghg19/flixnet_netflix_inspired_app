import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import db from "../firebase_handler";
import { collection, getDocs, query, where } from "firebase/firestore";

function PlansScreens() {
  const [products, setProducts] = useState([]);

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

  const loadCheckOut = async (priceId) => {};

  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        //TODO: add code to check if user has an active plan.
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
