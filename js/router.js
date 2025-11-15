'use strict'

import { loadCards } from "./app.js"
import { loadEpisodes } from "./app.js"

const routes = {
    '/': '/pages/home.html',
    '/characters': '/pages/characters.html',
    '/episode': '/pages/episode.html',
}

const route = async() => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('main_content').innerHTML = html

    if (window.location.pathname == '/') {
        loadCards()
    } else if (window.location.pathname == '/characters') {
        loadCards()
    } else if (window.location.pathname == '/episode'){
        loadEpisodes()
    }
}

window.route = route