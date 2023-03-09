const hero = {
    elementId: "#hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceRoll: 6
}

const monster = {
    elementId: "#monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceRoll: 4 
}

function renderCharacter(data) {
    document.querySelector(data.elementId).innerHTML = `
    <div class="character-card">
        <h4 class="name"> ${data.name} </h4>
        <img class="avatar" src="${data.avatar}"/>
        <p class="health">health: <b> ${data.health} </b></p>
        <div class="dice-container"><div class="dice"> ${data.diceRoll} </div></div>
    </div>    
`
}

renderCharacter(hero);
renderCharacter(monster);