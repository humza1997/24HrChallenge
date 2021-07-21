function createUrlQuery() {
  const title = window.location.href.split("???")[1];
  const url = `http://localhost:3000/post/title/${title}`;
  console.log(url);
  return url;
}

async function fetchData() {
  const url = createUrlQuery();
  const fetchResults = await fetch(url)
    .then((res) => res.json())
    .catch(console.error);
  console.log(fetchResults);
  return fetchResults;
}

function createResult({ title, username, body }) {
  const div = document.createElement("div");
  const addtitle = document.createElement("h1");
  addtitle.textContent = title;
  const addusername = document.createElement("h2");
  addusername.textContent = username;
  const addBody = document.createElement("p");
  addBody.textContent = body;
  div.append(addtitle);
  div.append(addusername);
  div.append(addBody);
  return div;
}

async function appendResultsToMain() {
  const main = document.querySelector("main");
  const searchResults = await fetchData();
  console.log(searchResults);
  searchResults.forEach((result) => {
    const divToAppend = createResult(result);
    console.log(divToAppend);
    main.append(divToAppend);
  });
}

appendResultsToMain();

let form = document.querySelector("form");
