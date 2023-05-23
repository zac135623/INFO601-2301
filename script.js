// The Joke API: https://v2.jokeapi.dev/

function getRandomJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?twopart?amount=1")
    .then((resp) => resp.json())
    .then((data) => {
      formatJoke(data);
    });
}

function formatJoke(data) {
  const jokeDiv = document.getElementById("jokeDiv");
  jokeDiv.innerHTML = "";
  jokeDiv.innerHTML += `<div><h1>"${data.setup}"</h1><br><h2>"${data.delivery}"</h2></div>`;
}
