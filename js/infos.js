'use strict'

import { getCharactersById } from './api.js'

let idCharacter = localStorage.getItem('characterId')
let imgCharacter = localStorage.getItem('characterImg')
let nameCharacter = localStorage.getItem('characterName')
let genderCharacter = localStorage.getItem('characterGender')
let occupationCharacter = localStorage.getItem('characterOccupation')
let episodeCharacter = localStorage.getItem('characterEpisode')

const buttonExit = document.getElementById('exit')

buttonExit.addEventListener('click', () => {
    window.location.href = '../pages/home.html'
})

const carregarPersonagem = await getCharactersById(idCharacter)

const carregarCard = () => {

    const containerCard = document.createElement('div')
    containerCard.classList.add('container-infos')

    const image = document.createElement('img')
    image.classList.add('card__image')
    image.src = imgCharacter

    const container = document.createElement('div')
    container.classList.add('card')

    const nameC = document.createElement('p')
    nameC.classList.add('card__name')
    nameC.textContent = nameCharacter

    const genderLi = document.createElement('li')
    genderLi.classList.add('li-gender')

    const gender = document.createElement('p')
    gender.classList.add('gender')
    gender.textContent = "Gender"

    const genderC = document.createElement('p')
    genderC.classList.add('card_gender')
    genderC.textContent = genderCharacter
    
    const occupationLi = document.createElement('li')
    occupationLi.classList.add('li-gender')

    const occupation = document.createElement('p')
    occupation.classList.add('occupation')
    occupation.textContent = "Ocuppation"

    const occupationC = document.createElement('p')
    occupationC.classList.add('card_occupation')
    occupationC.textContent = occupationCharacter
    
    const episodeLi = document.createElement('li')
    episodeLi.classList.add('li-gender')

    const episode = document.createElement('p')
    episode.classList.add('episode')
    episode.textContent = "Episode"

    const episodeC = document.createElement('p')
    episodeC.classList.add('card_episode')
    episodeC.textContent = episodeCharacter

    containerCard.append(image, container)
    container.append(nameC, genderLi, occupationLi, episodeLi)
    genderLi.append(gender, genderC)
    occupationLi.append(occupation, occupationC)
    episodeLi.append(episode, episodeC)

    return containerCard

}

export const loadCardInfos = () => {
    const containerLoad = document.getElementById('container-infos')
    const character = carregarCard(carregarPersonagem)

    containerLoad.replaceChildren(character)
}

loadCardInfos()