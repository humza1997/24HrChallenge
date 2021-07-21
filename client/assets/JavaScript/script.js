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
