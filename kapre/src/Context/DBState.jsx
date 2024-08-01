import React, { useEffect, useState } from "react";
import DBContext from "./DBContext";
import { doc, addDoc, setDoc, deleteDoc, Timestamp, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDB } from "../Firebase/FirebaseConfig";

function DBState(props) {
  const [Loading, setLoading] = useState(false);
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageURL: null,
    category: null,
    desc: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const [product, setProduct] = useState([]);
  
  const addprod = async () => {
    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);
      console.log("Product added to DB");
      window.location.href = "/admindashboard";
      getProdData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getProdData = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let productArr = [];
        querySnapshot.forEach((doc) => {
          productArr.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArr);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = getProdData();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  const handledit = (item) => {
    setProducts(item);
  };

  const updateProd = async () => {
    setLoading(true);
    try {
      if (products.id) {
        await setDoc(doc(fireDB, "products", products.id), products);
        console.log("Product updated successfully");
        getProdData();
        window.location.href = "/admindashboard";
      } else {
        console.log("Product ID is undefined");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const delProduct = async (item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      console.log("Product deleted successfully");
      getProdData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <DBContext.Provider value={{ Loading, setLoading, products, setProducts, addprod, product, delProduct, updateProd,handledit }}>
      {props.children}
    </DBContext.Provider>
  );
}

export default DBState;
