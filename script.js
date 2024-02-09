// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

function showRemainingTime() {
    let nextMonday = new Date("Feb 12 2024 9:30");
    
    let calcSeconds = 1000;
    let calcMinutes = calcSeconds * 60;
    let calchours = calcMinutes * 60;
    let calcDays = calchours * 24;
    
    let now = new Date();
    let giorniRimanenti = nextMonday.getTime() - now.getTime();
    // console.log(nextMonday.getTime());
    
    if ( giorniRimanenti < 0 ) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "finito il timer!";
    } else {

        let days = Math.floor(giorniRimanenti / calcDays);
        let hours = Math.floor((giorniRimanenti % calcDays) / calchours);
        let minutes = Math.floor((giorniRimanenti % calchours) / calcMinutes);
        let seconds = Math.floor((giorniRimanenti % calcMinutes) / calcSeconds);

        document.getElementById("countdown").innerHTML = days + " giorni " + hours + " ore " + minutes + " minuti " + seconds + " secondi";
    }
    
    
}
 let interval = setInterval(showRemainingTime, 1000);
