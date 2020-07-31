import { useState, useEffect, useContext } from "react";
import { projectFirestore } from "../firebase/config";
import FiregramContext from "../contexts/firegram/firegramContext";

const useFirestore = (collection) => {
  const { setLoading } = useContext(FiregramContext);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    setLoading(true);
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setLoading(false);
        setDocs(documents);
      });
    return () => unsub();
    // eslint-disable-next-line
  }, [collection]);
  return { docs };
};

export default useFirestore;
