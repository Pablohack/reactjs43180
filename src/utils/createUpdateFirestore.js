import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  writeBatch,
} from "firebase/firestore";

export const createOrder = async (items) => {
  const order = {
    buyer: { name: "Pablo", phone: "103894", email: "a@a.cl" },
    item: [{ name: items.name, price: items.price }],
    total: items.total,
  };
  const db = getFirestore();
  const orderCollection = collection(db, "orders");
  addDoc(orderCollection, order).then(({ id }) => {
    return id;
  });
};

export const updateOrder = async (id) => {
  const db = getFirestore();
  const orderDoc = doc(db, "orders", "R3iCHmDDK2elEhNHVqqE");
  updateDoc(orderDoc, { total: 1500 }).then((result) => {
    console.log(result);
  });
};

export const updateBatchOrders = () => {
  const db = getFirestore();
  const batch = writeBatch(db);

  const orderDoc = doc(db, "orders", "R3iCHmDDK2elEhNHVqqE");
  const categoriaDoc = doc(db, "categorias", "HNaWo9PR3NL43Pss53EK");

  batch.update(orderDoc, { total: 2000 });
  batch.update(categoriaDoc, { categoria: "Nintendo switch" });
  //   batch.set(categoriaDoc, { abrev: "Nintendo switch" });

  batch.commit();
};
