import { db } from "../fireBasejs/firebaseconfig.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const getAccounts = async () => {
  const querySnapshot = await getDocs(collection(db, "userDetails"));
  return querySnapshot;
};

async function balAmt() {
  const dataobj2 = await getAccounts();
  console.log(dataobj2);

  dataobj2.forEach((doc) => {
    console.log(doc.data());
    const amount = document.querySelector(".amount");
    console.log(amount); 

    amount.innerText = doc.data().Balance;
  });
}
balAmt();

// async function balAmt(loggedInAccNum) {
//   const dataobj = await getAccounts();

//   dataobj.forEach((doc) => {
//     const user = doc.data();
//     if (user.accountNum === loggedInAccNum) {
//       const amount = document.querySelector(".amount");
//       amount.textContent = user.Balance;
//     }
//   });
// }
