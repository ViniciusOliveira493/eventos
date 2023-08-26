import {Evento} from "../js/model/Evento.js";
import {EventoController} from "../js/controller/EventoController.js";
import { Card } from "./model/Card.js";

var eventos;
var eventoEmDestaque;

setInterval(function(){ 
    atualizarDivTempo(eventoEmDestaque);
}, 1000);

window.onload = function(){
    let e = new EventoController();
    obterEventos(e);
}

async function obterEventos(e){
    let dados = await e.getEventos();
    eventos = dados;
    mostrarEventos(dados);
}

function mostrarEventos(eventos){
    mostrarEventoEmDestaque(eventos[0]);    
    atualizarCards(eventos);
}

function mostrarEventoEmDestaque(evento){
    eventoEmDestaque = evento;
    document.getElementById("eventName").innerHTML = (eventoEmDestaque.name);  
    atualizarDivTempo(eventoEmDestaque);
}

function atualizarDivTempo(evento){
    let tempoFalta = evento.calcTimeLeft();
    document.getElementById("txtTime").innerHTML = (tempoFalta.days + "d "+ tempoFalta.time);
}

function atualizarCards(eventos){
    let container = document.getElementById("cardContainer");
    container.innerHTML = "";

    container.addEventListener("click",function(e) {
        let target = e.target.id;
        if(target != "" && target != "cardContainer"){
            mudarEvento(target);
        }
    });

    eventos.forEach(element => {
        let c = new Card(element);
        container.appendChild(c.draw());
    });
}

function mudarEvento(id){
    let split = id.split(".");
    eventos.forEach(element => {
        if(element.acronym === split[0] && element.edition === split[1]){
          mostrarEventoEmDestaque(element);
        }
    });
}

