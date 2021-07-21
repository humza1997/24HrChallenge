const form = document.querySelector(form);

form.addEventListener("submt", submitPost);

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

    // fetch("http://localhost:3000/post/", options)
    //     .then()
}