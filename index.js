document.addEventListener('DOMContentLoaded', () => {

    const cardsArray= [
        {
        name:'fries',
        img: 'image/fries.png'
        },
         {
        name:'cheeseburger',
        img: 'image/cheeseburger.png'
        },
        {
        name:'ice-cream',
        img: 'image/ice-cream.png'
        },
        {
        name:'pizza',
        img: 'image/pizza.png'
        },
        {
            name:'hotdog',
            img:'image/hotdog.png'
        },
        {
            name:'milkshake',
            img:'image/milkshake.png'
        },
        {
            name:'fries',
            img: 'image/fries.png'
            },
             {
            name:'cheeseburger',
            img: 'image/cheeseburger.png'
            },
            {
            name:'ice-cream',
            img: 'image/ice-cream.png'
            },
            {
            name:'pizza',
            img: 'image/pizza.png'
            },
            {
                name:'hotdog',
                img:'image/hotdog.png'
            },
            {
                name:'milkshake',
                img:'image/milkshake.png'
            }
    ]

    
    cardsArray.sort(() => 0.5 - Math.random())
    console.log(cardsArray)

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen =[]
    let cardsChosenIds =[]
    let cardsWon = []

    function createBoard(){
        for (let i =0; i <cardsArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'image/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardsArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
        console.log(cardsChosen.length)
        console.log(cardsChosenIds)
    }

        function checkForMatch(){
            const cards = document.querySelectorAll('img') 
            const optionOneId = cardsChosenIds[0]
            const optionTwoId = cardsChosenIds[1]

            if(optionOneId == optionTwoId){
                alert('You have chosen the same image!')
                cards[optionOneId].setAttribute('src', 'image/blank.png')
                cards[optionTwoId].setAttribute('src', 'image/blank.png')
            }
            else if (cardsChosen[0] === cardsChosen[1]){
                alert('You have found a match')
                cards[optionOneId].setAttribute('src','image/white.png')
                cards[optionTwoId].setAttribute('src','image/white.png')
                cards[optionOneId].removeEventListener('click',flipCard)
                cards[optionTwoId].removeEventListener('click',flipCard)
                cardsWon.push(cardsChosen)
            }
            else{
                cards[optionOneId].setAttribute('src', 'image/blank.png')
                cards[optionTwoId].setAttribute('src', 'image/blank.png')
                alert('Try Again')
            }
            cardsChosen = []
            cardsChosenIds = []
           resultDisplay.textContent = ' '+ cardsWon.length
           if(cardsWon.length === cardsArray.length/2){
            resultDisplay.textContent = ' You Win!'
           }
            
        }

    createBoard();

    
})