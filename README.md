# Pokemon Wheretech

## Descrizione
Questo progetto consiste in un gioco dove si tenta di emulare l'esperienza di un gioco di Pokemon. Esiste un generatore di mappe interattivo creato con React. Gli utenti possono specificare le percentuali di "mare" e "prato" e selezionare la dimensione della mappa. Il sistema genera una mappa in base ai parametri forniti, visualizzando aree contigue di mare e prato.

## Funzionalità Implementate

- [x] Input per la percentuale di "mare".
- [x] Input per la percentuale di "prato".
- [x] Selezione della dimensione della mappa (piccola, media, grande).
- [x] Validazione degli input per assicurarsi che le percentuali di "mare" e "prato" siano comprese tra il 10% e il 30%.
- [x] Generazione di una mappa 2D con aree contigue di mare e prato.
- [x] Visualizzazione della mappa generata attraverso il componente `GridComponent`.
- [x] Messaggi di errore per feedback dell'utente in caso di input non valido.

## Funzionalità da implementare
- **Movimento del Personaggio**: il personaggio compare al centro della mappa e si può muovere grazie alle frecce della tastiera, non ha la possibilità di spostarsi sulle caselle di mare.
- **Incontro con i Pokemon**: mentre si cammina sul prato il personaggio ha la probabilità del 20% di incontrare un pokemon e quelli catturati vengono aggiunti alla lista del Pokedex

## Ulteriori Funzionalità (Opzionali)

- **Salvataggio della Mappa**: Aggiungere la possibilità di salvare la mappa generata in un file JSON per uso futuro.
- **Caricamento Precedente della Mappa**: Permettere agli utenti di caricare una mappa salvata per visualizzarla o modificarla.
- **Colori Personalizzati**: Consentire agli utenti di selezionare i colori per il "mare" e il "prato".
- **Modalità Scenari**: Aggiungere scenari predefiniti che generano mappe con specifiche percentuali di mare e prato per una rapida generazione.
- **Zoom e Pan**: Implementare funzionalità di zoom e pan per visualizzare meglio mappe più grandi.
- **Interazione con la Mappa**: Consentire agli utenti di cliccare sulle celle della mappa per modificarne il tipo (mare, prato, terreno).
- **Statistiche della Mappa**: Visualizzare statistiche sulle dimensioni e le proporzioni della mappa generata.

## Installazione

1. Clona questo repository:
   ```bash
   git clone https://github.com/tuo-username/map-generator.git
   cd map-generator