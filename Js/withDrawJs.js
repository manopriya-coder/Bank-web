import { db } from "../fireBasejs/firebaseconfig.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const getAccounts = async () => {
  const querySnapshot = await getDocs(collection(db, "userDetails"));
  return querySnapshot;
};

async function deposit() {
  const dataobj3 = await getAccounts();
  //   console.log(dataobj2);

  dataobj3.forEach((doc) => {
    console.log(doc.data());
    const name = document.querySelector(".userName");
    const accNo = document.querySelector(".userAccNo");
    const accType = document.querySelector(".userAccType");
    const balance = document.querySelector(".userBal");
    const phone = document.querySelector(".userPhNo");

    // console.log(amount);
    name.innerText = doc.data().Name;
    accNo.innerText = doc.data().accountNum;
    accType.innerText = doc.data().accountType;
    phone.innerText = doc.data().phoneNum;
    balance.innerText = doc.data().Balance;
  });
  const depositBtn = document.querySelector(".depositBtn");
  const depositAmt = document.querySelector(".depositAmt");
  const displayAmt = document.querySelector(".displayAmt");

  depositBtn.addEventListener("click", function () {
    const amount = depositAmt.value;

    displayAmt.innerText = "You have withdraw :" + amount;
    console.log(amount);
  });
}
deposit();
