import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import db from "../firebase_handler";
import { collection, getDocs, query, where } from "firebase/firestore";

function PlansScreens() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "products"), where("active", "==", true));
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
      console.log("The products logged are: ", products);
      setProducts(products);
    });
  }, []);

  return <div>PlansScreens</div>;
}
export default PlansScreens;
