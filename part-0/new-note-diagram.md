```mermaid
newSequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server 
    server-->>browser: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: the html file 
    deactivate server

    Note right of browser: the browser sends the Json file with all the notes + the new one, then it receive a new petition with the new 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    Note right of browser: the browser receive the css file from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the js file
    deactivate server

    Note right of browser: The browser now starts the script that is returned from the server and fetches the notes from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: the json file with the new note

    Note right of browser: The browser start the callback function to render the json updated with the new note recently added
```
