#!/usr/bin/node

let black = 0;
let white = 0;
const baseColors = ['r', 'g', 'b', 'y', 'o', 'p'];
let secret = []
for (let i=0; i < 4; i++) {
    let rand = Math.floor(Math.random() * baseColors.length);
    secret.push(baseColors[rand]);
}
for (let i = 0; i < 10 && black < 4; i++) {
    
}
function playerVsBot(a, b, c, d) {
    if (a === secret[0]) {
        black += 1;
    } else if (secret.includes(a)) {
        white += 1;
    }
    if (b === secret[1]) {
        black += 1;
    } else if (secret.includes(b)) {
        white += 1;
    }
    if (c === secret[2]) {
        black += 1;
    } else if (secret.includes(c)) {
        white += 1;
    }
    if (d === secret[3]) {
        black += 1;
    } else if (secret.includes(d)) {
        white += 1;
    }
    return {'black': black, 'white': white};
}
const args = process.argv.slice(2);
console.log(args)
process.stdin.('data', (chunk) => { console.log(chunk.toString()) } );
console.log(playerVsBot(args[0], args[1], args[2], args[3]));

function botVsPlayer(a, b, c, d) {
    
}

// function botVsPlayer(a, b, c, d) {
    
// }

// func : pc VS player
// player vs player


// if 
