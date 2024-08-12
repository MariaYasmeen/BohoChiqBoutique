import { db } from '../Utils/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const searchFirebase = async (searchTerm) => {
    const results = [];
    const collections = ["products", "Bridals", "Kidswear", "Unstitched", "jewelry"];
    const fieldsToSearch = ["title", "description", "code", "price"];
    
    // Normalize the search term to lowercase
    const lowerSearchTerm = searchTerm.toLowerCase();

    // Helper function to check if any field contains the search term
    const matchesSearchTerm = (data) => {
        return fieldsToSearch.some(field => 
            data[field] && data[field].toLowerCase().includes(lowerSearchTerm)
        );
    };

    for (const col of collections) {
        const colRef = collection(db, col);
        const querySnapshot = await getDocs(colRef);

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // Filter results based on case-insensitive and partial matches
            if (matchesSearchTerm(data)) {
                results.push({ ...data, id: doc.id, collection: col });
            }
        });
    }
    return results;
};

export default searchFirebase;
