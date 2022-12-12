let btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    document.getElementById('input-2').value = document.getElementById('input-1').value;
    document.getElementById('input-1').value = '';
});
