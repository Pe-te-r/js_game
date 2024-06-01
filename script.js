let score=0

const url={"paper":"./images/icon-paper.svg","rock":"./images/icon-rock.svg","scissors":"./images/icon-scissors.svg"}
// const player_choice
// const computer_choice=computerPlay()
const results=document.querySelector("#results")
results.innerText=score

// const defaultCloneDisplay=document.querySelector(".thisone").cloneNode(true)
const display=document.querySelector(".gameContainer")

const computerPlay=()=>{
    const randomNumber=Math.floor(Math.random()*3)
    if(randomNumber===0){
        return 'rock'
    }else if(randomNumber===1){
        return 'paper'
    }else{
        return'scissors'
    }
}

const showResults = (imageName)=>{
    const imageDiv = document.createElement('div')
    imageDiv.classList.add('imageDiv')
    imageDiv.setAttribute('data-value',imageName)
    image=document.createElement('img')
    if (imageName==='scissors'){
        image.src=url[imageName]
    }else if (imageName==='paper'){
        image.src=url[imageName]
    }else{
        image.src=url[imageName]
    }
    imageDiv.appendChild(image)
    display.appendChild(imageDiv)
    
}

const reset =()=>{
    display.innerHTML=''
    showResults('paper')
    showResults('rock')
    showResults('scissors')
    mainFunc()
}


const mainFunc=()=>{
    const gameImages=document.querySelectorAll('.imageDiv')
    gameImages.forEach((image) =>{
        image.addEventListener('click',()=>{
            const player_choice=image.getAttribute('data-value')
            const computer_choice=computerPlay()
            display.innerHTML=''
            showResults(player_choice)
            showResults(computer_choice)
            score += calculateScore(player_choice, computer_choice)
            results.innerText=score
            console.log(player_choice)
            // console.log(computer_choice)
            const button = document.createElement('button')
            button.classList.add('button')
            button.innerText='Play Again'
            display.appendChild(button)
            
            button.addEventListener('click',()=>{
                reset()
            })
        })
    })
}
const calculateScore=(player_choice, computer_choice)=>{
    if (player_choice==computer_choice){
        return 0
    }else if (player_choice==="scissors" && computer_choice==="paper"){
        return 1
    }else if (player_choice==='rock' && computer_choice==='scissors'){
        return 1
    }else if(player_choice==='paper' && computer_choice=="rock"){    
        return 1
    }else{
        return -1
    }
}

mainFunc()