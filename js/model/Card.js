import { Evento } from "./Evento.js";

export
class Card{
    
    eventName;
    eventDate;
    eventId;

    constructor(evento){
        this.eventName = evento.name;
        this.eventDate = evento.startdate;
        this.eventId = evento.acronym +"."+evento.edition;
    }

    draw(){
        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class","card");
        cardDiv.setAttribute("id",this.eventId);

        var spanName = document.createElement("span");
        spanName.innerHTML = this.eventName;

        var spanDate = document.createElement("span");
        spanDate.innerHTML = this.eventDate;

        cardDiv.appendChild(spanName);
        cardDiv.appendChild(spanDate);  

        return cardDiv;
    }    
}