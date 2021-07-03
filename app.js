const btn = document.getElementById('btnGet');
const listado = document.getElementById('listado');

btn.addEventListener('click', getInfo);

async function getInfo(){

    try{
        const users = await fetch('./array.js');
        const user = await users.id;
        console.log(user);
    }catch(error) {
        console.log(error);
    }
    
}