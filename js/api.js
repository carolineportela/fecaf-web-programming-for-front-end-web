export const getCharacters = async() => {
    const url = `https://bobsburgers-api.herokuapp.com/characters/`
    const response = await fetch(url)
    const characters = await response.json()

    return characters
}

export const getCharactersById = async(id) => {
    const url = `https://bobsburgers-api.herokuapp.com/characters/${id}`
    const response = await fetch(url)
    const charactersId = await response.json()

    return charactersId
}

export const getEpisode = async() => {
    const url = `https://bobsburgers-api.herokuapp.com/episodes`
    const response = await fetch(url)
    const episode = await response.json()

    return episode
}
