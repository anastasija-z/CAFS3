function getAlertWindow() {
    document.getElementById('btn-alert').addEventListener('click', () => {
        alert ('Hello World!'); 
    });
}

function changeRegister() {
    let input = document.getElementById('input');
    
    document.getElementById('btn-upper-case').addEventListener('click', () => {
        input.value = input.value.toUpperCase();
    });

    document.getElementById('btn-lower-case').addEventListener('click', () => {
        input.value = input.value.toLowerCase();
    });

    document.getElementById('btn-first-upper').addEventListener('click', () => {
        input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    });

    document.getElementById('btn-first-lower').addEventListener('click', () => {
        input.value = input.value.charAt(0).toLowerCase() + input.value.slice(1);
    });
}

function blockUnblockInput() {
    let input = document.getElementById('text-input');

    document.getElementById('btn-block').addEventListener('click', () => {
        input.disabled = true;
    });

    document.getElementById('btn-unblock').addEventListener('click', () => {
        input.disabled = false;
    });
}

function changeImage() {
    let image = document.getElementById('img');
    image.addEventListener('mouseover', () => {
        image.src = 'pics/PLDVxza.jpeg'
    });
    image.addEventListener('mouseout', () => {
        image.src = 'pics/0DElr0H.jpeg'
    });
}

function changeStyle() {
    const figure = document.getElementById('figure');
    
    let cursors = document.getElementById('cursor-list');
    let cursorsChildren = [...cursors.children];
    cursorsChildren.forEach(child => {
        child.firstChild.addEventListener('click', () => {
            figure.style.cursor = child.firstChild.value;
        });
    });

    let colors = document.getElementById('color-list');
    let colorsChildren = [...colors.children];
    colorsChildren.forEach(child => {
        child.firstChild.addEventListener('click', () => {
            figure.style.color = child.firstChild.value;
        });
    });

    let borders = document.getElementById('border-list');
    let bordersChildren = [...borders.children];
    bordersChildren.forEach(child => {
        child.firstChild.addEventListener('click', () => {
            figure.style.border = `1px solid ${child.firstChild.value}`;
        });
    });

    document.getElementById('btn-reset').addEventListener('click', () => {
        figure.style.removeProperty('border');
        figure.style.removeProperty('color');
        figure.style.removeProperty('cursor');
    });
}

function getModal() {
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
    })
}

getAlertWindow();
changeRegister();
blockUnblockInput();
changeImage();
changeStyle();
getModal();
