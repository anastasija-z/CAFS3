function getMusicians(num) {
    if (num <= 0) {
        console.log('ne grupė');
    } else if (num === 1) {
        console.log('solo');
    } else if (num === 2) {
        console.log('duetas');
    } else if (num === 3) {
        console.log('trio');
    } else if (num === 4) {
        console.log('kvartetas');
    } else {
        console.log('didelė grupė');
    }
}

getMusicians(6);