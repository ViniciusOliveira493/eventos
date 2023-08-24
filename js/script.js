import {Evento} from "../js/model/Evento.js";
import {EventoController} from "../js/controller/EventoController.js";
var e1;

setInterval(function(){ 
    atualizarDivTempo(e1);
}, 1000);

window.onload = function(){
    let e = new EventoController();    
    obterEventos(e);
}

async function obterEventos(e){
    let dados = await e.getEventos();
    console.log(dados);
    mostrarEventos(dados);

}

function mostrarEventos(eventos){
    e1 = eventos[0];
    document.getElementById("eventName").innerHTML = (e1.name);  
    atualizarDivTempo(e1);
}

function atualizarDivTempo(evento){
    let tempoFalta = evento.calcTimeLeft();
    document.getElementById("txtTime").innerHTML = (tempoFalta.days + "d "+ tempoFalta.time);
}