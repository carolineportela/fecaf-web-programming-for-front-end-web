'use strict'

import './router.js'
import { getCharacters } from './api.js'
import { getEpisode } from "./api.js"

const episodes = await getEpisode()
const carregarPersonagens = await getCharacters()

const carregarCards = (character) => {

    const container = document.createElement('a')
    container.classList.add('card')
    container.setAttribute('href', '../pages/infos.html')
    container.addEventListener('click', () => {
        localStorage.setItem('characterId', character.id)
        localStorage.setItem('characterImg', character.image)
        localStorage.setItem('characterName', character.name)
        localStorage.setItem('characterGender', character.gender)
        localStorage.setItem('characterOccupation', character.occupation)
        localStorage.setItem('characterEpisode', character.firstEpisode)
    })

    const image = document.createElement('img')
    image.classList.add('card__image')
    image.src = `${character.image}`

    const nameCharacter = document.createElement('p')
    nameCharacter.classList.add('card__name')
    nameCharacter.textContent = character.name

    container.append(image, nameCharacter)

    return container

}

export const loadCards = () => {
    const container = document.getElementById('container-characters')
    const character = carregarPersonagens.map(carregarCards)
    
    container.replaceChildren(...character)
}

// loadCards()


const cardEpisodes = (episode) => {
  
    const containerCard = document.createElement('div')
    containerCard.classList.add('cardEpisode')

    const cardInfos = document.createElement('div')
    cardInfos.classList.add('infos-episode')

    const nameEp = document.createElement('h1')
    nameEp.classList.add('name-episode')
    nameEp.textContent = episode.name

    const seasonLi = document.createElement('li')
    seasonLi.classList.add('li-season')

    const season = document.createElement('p')
    season.classList.add('season')
    season.textContent = 'Season'

    const seasonInfo = document.createElement('p')
    seasonInfo.classList.add('info-season')
    seasonInfo.textContent = episode.season

    const epsisodeLi = document.createElement('li')
    epsisodeLi.classList.add('li-episode')

    const episodesP = document.createElement('p')
    episodesP.classList.add('episode')
    episodesP.textContent = 'Episode'

    const episodeInfo = document.createElement('p')
    episodeInfo.classList.add('info-episode')
    episodeInfo.textContent = episode.episode

    const viewsLi = document.createElement('li')
    viewsLi.classList.add('li-views')

    const views = document.createElement('p')
    views.classList.add('views')
    views.textContent = 'Views'

    const viewsInfo = document.createElement('p')
    viewsInfo.classList.add('info-views')
    viewsInfo.textContent = episode.totalViewers

    const lancamentoLi = document.createElement('li')
    lancamentoLi.classList.add('li-lancamento')

    const lancamento = document.createElement('p')
    lancamento.classList.add('lancamento')
    lancamento.textContent = 'Air date'

    const lancamentoInfo = document.createElement('p')
    lancamentoInfo.classList.add('info-lancamento')
    lancamentoInfo.textContent = episode.airDate

    containerCard.appendChild(cardInfos)
    cardInfos.append(nameEp, seasonLi, epsisodeLi, viewsLi, lancamentoLi)
    seasonLi.append(season, seasonInfo)
    epsisodeLi.append(episodesP, episodeInfo)
    viewsLi.append(views, viewsInfo)
    lancamentoLi.append(lancamento, lancamentoInfo)

    return containerCard
}

export const loadEpisodes = () => {
    const card = document.getElementById('container-episode')
    const eps = episodes.map(cardEpisodes)

    card.replaceChildren(...eps)
}

// loadEpisodes()