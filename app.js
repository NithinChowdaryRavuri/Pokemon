const main = document.querySelector("main");

const card = function (data, i) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<p>#${i}</p> <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}"> <h4>${data.name}</h4> `;
  main.appendChild(div);
};

const feed = async () => {
  const requests = [];
  for (let i = 1; i < 152; i++) {
    requests.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json())
    );
  }
  const responses = await Promise.all(requests);
  responses.forEach((data, i) => {
    card(data, i + 1);
  });
};

feed();
