const query = query(collection(db, 'users'), where('uid', '==', 'someUid'));

const unsubscribe = onSnapshot(query, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
});

// ... later ...

unsubscribe(); // This is often forgotten, leading to memory leaks