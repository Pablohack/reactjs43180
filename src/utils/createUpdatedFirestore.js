import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
} from "firebase/firestore";

export const createOrder = async (items) => {
  const order = {
    buyer: { name: "pablo", phone: "111", email: "a@a.cl" },
    items: [{ name: items.name, price: items.price }],
    total: items.total,
  };
  const db = getFirestore();
  const orderCollection = collection(db, "orders");
  addDoc(orderCollection, order).then(({ id }) => {
    return id;
  });
};

export const updateOrder = async (id, count) => {
  const db = getFirestore();
  const orderDoc = collection(db, "orders", "fxvc6q16hd5up9kjx65V");
  updateDoc(orderDoc, { total: 2 });
};
