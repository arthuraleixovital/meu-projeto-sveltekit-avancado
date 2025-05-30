export async function load() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const data = await res.json();
   
    for (const pokemon of data.results) {
      const id = pokemon.url.split("/").at(-2);
      pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
   
    return { pokemons: data.results };
  }