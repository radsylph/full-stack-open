 ```mermaid
 sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    
    Note right of browser: The browser when the user first enter the page sends a series of request to the server to get the html, css, js and the notes files in order to build the page.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    
    Note right of browser: When the user create a new note, the browser then adds the new note to the local copy of all the notes that it first got from the server, then it renders all the notes + the new note to the user and the sends the new copy of all the notes + the newly created one so when the browser re charge it will get the latest collection of notes.
 ```