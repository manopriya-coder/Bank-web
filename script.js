import { db } from "./fireBasejs/firebaseconfig.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const getAccounts = async () => {
  const querySnapshot = await getDocs(collection(db, "userDetails"));
  return querySnapshot;
};

async function login() {
  const dataobj = await getAccounts();
  console.log(dataobj);

  dataobj.forEach((doc) => {
    console.log(doc.data());

    const logInBtn = document.querySelector(".btn");
    logInBtn.addEventListener("click", function () {
      const Name = document.querySelector(".name").value;
      const accNum = document.querySelector(".accNum").value;

      if (Name == doc.data().Name && accNum == doc.data().accountNum) {
        window.location.href = "../Html/afterLogin.html";
      } else {
        alert("You not have a account in this bank");
      }
    });
  });
}
login();
