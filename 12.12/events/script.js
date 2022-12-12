// Sukurkite 2 input elemetntus ir mygtuką. Vienas iš input elementų turi būti readonly.
// Paspaudus mygtuką įvestas tekstas JavaScript Event pagalba turi būti perkeltas iš pirmo į antrą input.

let btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    document.getElementById('input-2').value = document.getElementById('input-1').value;
    document.getElementById('input-1').value = '';
});
