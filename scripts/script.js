import { data } from '../data/data.js'

const target      = document.getElementById('template-card').content;
const fragment    = document.createDocumentFragment();
const items       = document.getElementById('items');



const cargarInfo = (data) => {
    data.forEach(productos => {
        const { id, producto, image,precio,detalle } = productos;
        target.querySelector('.detalle').dataset.id = id;
        target.querySelector('.producto').textContent = producto;
        target.querySelector('.foto').setAttribute('src', image);
        target.querySelector('.precio').textContent = precio;
        target.querySelector('.parrafo').textContent = detalle;
        const clone = target.cloneNode(true);
        fragment.appendChild(clone);

    });
    items.appendChild(fragment);

    items.addEventListener('click', (x) => {
        if (x.target.classList.contains('card')) { //trae la cosa que contenga la card
            if (x.target.style.width == "500px") {  //filtra si esta abierto o cerrado
               //si esta abierto busca la card abierta y cambia none en la linea 28
                let apertura = document.querySelector('div.card[id="open"] div.apertura') 
                apertura.style.display= "none";
                //luego pone el tamaño por defecto
                x.target.style.width = "255px";
                //remueve el id
                x.target.id = '';
            } else {
                //si esta cerrada pone el id en open y cambia el style por 500px
                x.target.id = 'open';
                x.target.style.width = "500px";
                //busca la apertura a afectar con el display flex
                let apertura = document.querySelector('div.card[id="open"] div.apertura')
                apertura.style.display= "flex";
    
            }
        }
    });


}

document.addEventListener('DOMContentLoaded', cargarInfo(data));

items.addEventListener('click', (e) => {
    if (e.target.classList.contains('detalle')) {
        let idFind = e.target.dataset.id;
        let botonFind = data.find(productos => productos.id == idFind);
        localStorage.setItem('Detalle', JSON.stringify(botonFind));
    }
});


