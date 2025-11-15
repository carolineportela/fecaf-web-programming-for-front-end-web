'use strict'

class card extends HTMLElement {

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })
        this.name = 'Name Character'
        this.photo = null
    }

    static get observedAttributes() {
        return ['name', 'photo']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {

        const css = document.createElement('style')
        css.textContent = `

         *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
         }

        .card{
            gap: 20px;
            margin: 30px;
            padding: 16px;
            display: flex;
            border-radius: 5px;
            align-items: center;
            transition: all .7s;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0px 0px 5px 0px yellow;
        }
        
        .card:hover{
             box-shadow: 0px 0px 18px #cfcc0e;    
        }
        
        .card__image{
            width: 200px;
            height: 300px;
            object-fit: contain;
            background-image: url(${this.photo});
        }
        `
        return css
    }

    component() {

        const card = document.createElement('div')
        card.classList.add('card')

        const image = document.createElement('div')
        image.classList.add('card__image')

        const nameCharacter = document.createElement('div')
        nameCharacter.classList.add('card__name')
        nameCharacter.textContent = this.name

        card.append(image, nameCharacter)

        return card
    }

}

customElements.define('card-character', card)