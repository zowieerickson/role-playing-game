const heroElementId = '#hero'
const heroName = 'Wizard';
const heroAvatar = 'images/wizard.png'
const heroHealth = 60;
const heroDice = 6;


const monsterElementId = '#monster';
const monsterName = 'Orc';
const monsterAvatar = 'images/orc.png'
const monsterHealth = 10;
const monsterDice = 4;

function renderCharacter(elementId, name, avatar, health, dice) {
    document.querySelector(elementId).innerHTML = `
    <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container"><div class="dice"> ${dice} </div></div>
    </div>    
`
}

renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDice);
renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDice);