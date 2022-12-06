// Muzikinės grupės turi specialius pavadinimus pagal žmonių skaičių grupėje. Pvz., „kvartetas“ yra muzikinė grupė, kurią sudaro keturi muzikantai.
// Parašykite sąlyginių teiginių seriją (else...if statements), kuri:
// Atspausdins consolėje "ne grupė" jei muzikantų yra mažiau ar lygu 0;
// Atspausdins consolėje "solo" jei muzikantų yra 1;
// Atspausdins consolėje "duetas" jei muzikantų yra 2;
// Atspausdins consolėje "trio" jei muzikantų yra 3;
// Atspausdins consolėje "kvartetas" jei muzikantų yra 4;
// Atspausdins consolėje "didelė grupė" jei muzikantų yra daugiau nei 4.

function getMusicians(num) {
    let answer = '';
    if (num <= 0) {
        return answer = 'ne grupė';
    } else if (num === 1) {
        return answer = 'solo';
    } else if (num === 2) {
        return answer = 'duetas';
    } else if (num === 3) {
        return answer = 'trio';
    } else if (num === 4) {
        return answer = 'kvartetas';
    } else {
        return answer = 'didelė grupė';
    }
}

console.log(getMusicians(2));
