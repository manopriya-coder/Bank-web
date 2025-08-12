import { db } from "../fireBasejs/firebaseconfig";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const getAccounts = async () => {
  const querySnapshot = await getDocs(collection(db, "userDetails"));
  return querySnapshot;
};

function choice() {
  console.log("hello");
  const balance = document.querySelector(".balance");
  const deposit =document.querySelector(".deposit")

  balance.addEventListener("click", function () {
    // console.log(balance);

    window.location.href = "../Html/balance.html";
  });

  deposit.addEventListener("click", function () {
    // console.log(deposit);

    window.location.href = "../Html/depositPage.html";
  });
}
choice();

