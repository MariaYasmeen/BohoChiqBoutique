import React, { useEffect, useState } from "react";
import DBContext from "./DBContext";
import { addDoc, Timestamp, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDB } from "../Firebase/FirebaseConfig";

function DBState(props) {
  const [Loading, setLoading] = useState(false);

  // Initialize state for product attributes
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageURL: null,
    category: null,
    desc: null,
    time: Timestamp.now(), // Default timestamp
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addprod = async () => {
    setLoading(true); // Set loading to true at the beginning
    try {
      const productRef = collection(fireDB, "products"); // Get a reference to the products collection
      await addDoc(productRef, products); // Add the product to Firestore
      console.log("Product added to DB");
      window.location.href= "/admindashboard"
      getProdData(); // Refresh product data
    } catch (error) {
      console.log(error); // Log errors if any
    } finally {
      setLoading(false); // Set loading to false after operation
    }
  };

  const [product, setProduct] = useState([]);
  const getProdData = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time")); // Query products ordered by time
      const unsubscribe = onSnapshot(q, (querySnapshot) => { // Setup Firestore snapshot listener
        let productArr = [];
        querySnapshot.forEach((doc) => {
          productArr.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArr); // Update product state
        setLoading(false);
      });

      return unsubscribe; // Return the unsubscribe function properly
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = getProdData(); // Get the unsubscribe function
    return () => {
      unsubscribe && unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, []);

  return (
    <DBContext.Provider value={{ Loading, setLoading, products, setProducts, addprod, product }}>
      {props.children}
    </DBContext.Provider>
  );
}

export default DBState;
