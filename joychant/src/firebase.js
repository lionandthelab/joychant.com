import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { ref, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyDSWb90IObvGKIUo7YkEV9PSkjGrmlnB44",
  authDomain: "joychant-4f658.firebaseapp.com",
  projectId: "joychant-4f658",
  storageBucket: "joychant-4f658.appspot.com",
  messagingSenderId: "179429389976",
  appId: "1:179429389976:web:835cec66559538f7a742ed",
  measurementId: "G-YZW64Y1RBT",
};

const firebaseApp = initializeApp(config);
const db = getFirestore(firebaseApp);
const usersCollection = collection(db, "users");

export const createUser = (user) => {
  // return usersCollection.add(user);
  return addDoc(usersCollection, user);
};

export const getUser = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const updateUser = (id, user) => {
  const docRef = doc(db, "users", id);
  return updateDoc(docRef, user);
};

export const deleteUser = (id) => {
  const docRef = doc(db, "users", id);
  return deleteDoc(docRef);
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = onSnapshot(usersCollection, (snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};
