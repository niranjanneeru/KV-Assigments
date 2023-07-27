obj = document.getElementById('div1');

function gen_clr(){
    let letters = "0123456789ABCDEF";
    let color = '#';

    for (let i = 0; i < 6; i++)
        color += letters[(Math.floor(Math.random() * 16))];

    return color;
}

obj.addEventListener('mouseenter', ()=>{
    obj.style.backgroundColor = gen_clr();
});

obj.addEventListener('mouseleave', ()=>{
    obj.style.backgroundColor = 'black';
});