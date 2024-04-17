const main = document.querySelector("main");

const card = function (data, i) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<p>#${i}</p> <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}"> <h4>${data.name}</h4> `;
  main.appendChild(div);
};

const feed = async () => {
  for (let i = 1; i < 152; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    card(data, i);
  }
};

feed();
