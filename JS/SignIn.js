let form = document.querySelector("form");
let users = JSON.parse(localStorage.getItem("usersData"));

function signIn(event) {
  let email = document.getElementById("signIn_email").value;
  let password = document.getElementById("signIn_password").value;
  let userId = -1;
  if (localStorage.getItem("usersData")) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        userId = users[i].id; // user[i] = utilizatorul nostru logat
        // console.log(users[i]);
        localStorage.setItem("registerUser", JSON.stringify(users[i]));
        break; // pentru a opri loop-ul daca s-a gasit user-ul
      }
    }
    // console.log(userId);
    if (userId === -1) {
      alert("The email/ password is incorrect!");
      event.preventDefault();
    }
  } else {
    alert("The email/ password is incorrect!"); // "Not a registered user"
    event.preventDefault();
  }
}

form.addEventListener("submit", signIn);

//https://stackoverflow.com/questions/61162022/how-to-check-if-user-exist-in-local-storage
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// 1 - Verificam daca exista utilizatori in Local Storage
// 2 - Daca nu exista => nu se face submit la form, se ramane pe aceeasi pagina
// 3 - Daca exista => verificam sa corespunda email-ul si parola
// 4 - Pentru motive de securitate, daca nu exista user in Local Storage, e gresit email-ul sau e gresita parola => se va afisa acelasi mesaj


