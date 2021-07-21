let form = document.querySelector("form");

form.addEventListener("submit", submitPost);

function submitPost(event) {
  event.preventDefault();

  let thoughtTitle = document.querySelector("#title").value;
  let thoughtAuthor = document.querySelector("#name").value;
  let thoughtContent = document.querySelector("#thoughts").value;

  const thoughtData = {
    title: thoughtTitle,
    username: thoughtAuthor,
    body: thoughtContent,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(thoughtData),
    headers: { "Content-Type": "application/json" },
  };

  fetch("http://localhost:3000/post/", options).then((r) => r.json);

  redirectToResults(event);
}

function redirectToResults(e) {
  e.preventDefault(e);
  const query = e.target[0].value;
  const currentUrl = window.location.href;
  const newUrl = `thought.html???${query}`;
  window.location.href = newUrl;
}

// function appendThoughts(data) {
//     data.thought.forEach(appendThought);
// //   }

//   function appendThought(thoughtData) {
//     const newRow = document.createElement("tr");
//     const foodLi = formatFoodTr(foodData, newRow);
//     foodList.append(newRow);
//   }

// // function appendThoughts(data){
// //     data.
// // }

// function appendThought(thoughtData){
//     const addTitle = document.createElement("h1");
//     const addUserName = document.createElement("h3");
//     const addBody = document.createElement("p");

//     const test = document.querySelector("#test")

//     addTitle.textContent = thoughtData.title;
//     addUserName.textContent = thoughtData.username;
//     addBody.textContent = thoughtData.body;

//     test.append(addTitle);
//     test.append(addUserName);
//     test.append(addBody);
//     return test;
// }
