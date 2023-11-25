    document.addEventListener("DOMContentLoaded", () => {
    const pokemonInfoContainer = document.getElementById("pokemonInfo");
    const getPokemonBtn = document.getElementById("getPokemonBtn");
    const pokemonIdInput = document.getElementById("pokemonId");

    async function getPokemonInfo(pokemonId) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const pokemon = await response.json();

            const pokemonInfoHTML = `
                <h2>${pokemon.name}</h2>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <p>Altura: ${pokemon.height}</p>
                <p>Peso: ${pokemon.weight}</p>
                <p>Habilidades: ${pokemon.order}</p>
                <p>Tipos: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
            
            `;

            pokemonInfoContainer.innerHTML = pokemonInfoHTML;

        } catch (error) {
            console.error(`Erro ao obter informações do Pokémon: ${error.message}`);
            pokemonInfoContainer.innerHTML = `<p>Erro ao obter informações do Pokémon.</p>`;
        }
    }

    getPokemonBtn.addEventListener("click", () => {
        const pokemonId = parseInt(pokemonIdInput.value);
        getPokemonInfo(pokemonId);
    });

    // Preenche as informações do Pokémon inicialmente
    getPokemonInfo(25);
});
