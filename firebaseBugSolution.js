const query = query(collection(db, 'users'), where('uid', '==', 'someUid'));

let unsubscribe = null;

const startListening = () => {
  unsubscribe = onSnapshot(query, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  });
};

const stopListening = () => {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null; // Ensure we don't try to unsubscribe multiple times.
  }
};

// ... later, when you need to stop listening ...

stopListening();

// ... optionally, start again later
// startListening();