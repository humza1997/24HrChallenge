let form = document.querySelector("form");

form.addEventListener("submit", submitPost);

function submitPost(event){
    event.preventDefault();

    let thoughtTitle = document.querySelector("#title");
    let thoughtAuthor = document.querySelector("#name");
    let thoughtContent = document.querySelector("#thoughts");

    const thoughtData = {
        title: thoughtTitle,
        username:thoughtAuthor,
        body:thoughtContent
    };

    const options = {
       method : "POST",
       body: JSON.stringify(thoughtData),
       headers: { "Content-Type": "application/json" }
    };

    fetch("http://localhost:3000/post/", options)
        .then((r) => r.json)
        .then(appendThought)
}

// function appendThoughts(data){
//     data.
// }

function appendThought(thoughtData){
    const addTitle = document.createElement("h1");
    const addUserName = document.createElement("h3");
    const addBody = document.createElement("p");

    const test = document.querySelector("#test")

    addTitle.textContent = thoughtData.title;
    addUserName.textContent = thoughtData.username;
    addBody.textContent = thoughtData.body;

    test.append(addTitle);
    test.append(addUserName);
    test.append(addBody);
    return test;
}