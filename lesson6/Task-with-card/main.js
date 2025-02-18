// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards)

let findAceSpade = cards.find(item => item.value === 'ace' && item.cardSuit === 'spade')
console.log(findAceSpade)
let findAllSix = cards.filter(item =>item.value === '6')
console.log(findAllSix)
let findAllRed = cards.filter(item =>item.color === 'red')
console.log(findAllRed)
let findDiamond = cards.filter(item => item.cardSuit === 'diamond')
console.log(findDiamond)
let findClubs = cards.filter(item =>item.cardSuit === 'club' && item.value >= '9')
console.log(findClubs)

