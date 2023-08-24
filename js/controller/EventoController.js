import { Evento } from "../model/Evento.js";
import { EventoDAO } from "../dao/EventoDAO.js";

export
class EventoController{
    constructor(){

    }

    getEventos(){
        let dao = new EventoDAO();
        let eventos = dao.getEventos();
        return this.ordenar(eventos);
    }

    ordenar(eventos){
        return eventos;
    }
}