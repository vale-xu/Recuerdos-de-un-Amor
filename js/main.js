const modalAdd1 = document.querySelector('#modalAdd1');
const modalAdd2 = document.querySelector('#modalAdd2');

const closeModal1 = () => {
    modalAdd1.style.display = 'none';
}

const openModal1 = () => {
    modalAdd1.style.display = 'flex';
}

const closeModal2 = () => {
    modalAdd2.style.display = 'none';
}

const openModal2 = () => {
    modalAdd2.style.display = 'flex';
}

$(document).ready(function(){

    $('#acepta').click(function(){
        $('.modal-2').css("display", "none");
    });

    $("#negative").click(function(){
        var bool=confirm("¿Segura que deseas continuar?");
        if(bool){
          alert("Error #714, requiere recargar pagina", location.reload());
        }else{
          alert(":D");
        }
    });
})

//================================================================================

const no = document.querySelector('.nop');
        
    no.addEventListener('click', ()=> {
    width = window.innerWidth - 100;
    height = window.innerHeight - 100;

    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);

    document.getElementById('nop').style.position = "absolute";
    document.getElementById('nop').style.left = newWidth + "px";
    document.getElementById('nop').style.top = newHeight + "px";

});