// src/utils/crudUtils.js
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { fetchDocumentsFromCollection, updateDataInCollection, deleteDataFromCollection, fetchCollectionNames } from "./firebaseUtils";

// Fetch collection names
export const fetchCollectionNamesAsync = async () => {
  try {
    const collections = await fetchCollectionNames();
    return collections;
  } catch (error) {
    console.error("Failed to fetch collection names: ", error.message);
    throw new Error("Failed to fetch collection names.");
  }
};


export const createDocumentInCollection = async (collectionName, documentData, documentId = null) => {
  try {
    // Ensure documentData is an object
    if (typeof documentData !== 'object' || documentData === null) {
      throw new Error("Invalid document data. It must be an object.");
    }

    let docRef;

    // If documentId is provided and valid, use setDoc with the provided ID
    if (documentId && typeof documentId === 'string') {
      docRef = doc(db, collectionName, documentId); // Create a reference with the custom ID
      await setDoc(docRef, documentData); // Use setDoc to set the data with the custom ID
    } else {
      // If no documentId is provided, use addDoc to let Firestore generate an ID
      docRef = await addDoc(collection(db, collectionName), documentData);
    }

    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error.message);
    throw new Error("Failed to add document");
  }
};


export const createCollectionAndAddDataAsync = async (collectionName, data, customId) => {
    try {
      const docId = customId.trim() ? customId : await createCollectionAndAddDataFromFirebase(collectionName, data);
      return docId;
    } catch (error) {
      console.error("Failed to create collection and add data: ", error.message);
      throw new Error("Failed to create collection and add data.");
    }
  };
  
// Fetch documents from the selected collection
export const fetchDocumentsAsync = async (collectionName) => {
  try {
    const docs = await fetchDocumentsFromCollection(collectionName);
    return docs;
  } catch (error) {
    console.error("Failed to fetch documents: ", error.message);
    throw new Error("Failed to fetch documents.");
  }
};

// Update data in the selected document
export const updateDocumentAsync = async (collectionName, documentId, updatedFields) => {
  try {
    await updateDataInCollection(collectionName, documentId, updatedFields);
  } catch (error) {
    console.error("Failed to update document: ", error.message);
    throw new Error("Failed to update document.");
  }
};

// Delete document from the collection
export const deleteDocumentAsync = async (collectionName, documentId) => {
  try {
    await deleteDataFromCollection(collectionName, documentId);
  } catch (error) {
    console.error("Failed to delete document: ", error.message);
    throw new Error("Failed to delete document.");
  }
};
