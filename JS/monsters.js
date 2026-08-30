const search = document.getElementById('search');
let info_desc = document.getElementById('infoDescription');
let tryButton = document.getElementById('tryCommand'); 
let terminalText = document.getElementById('terminalCommand'); 
let monsterName = document.getElementById('monsterName');
let consoleOutput = document.getElementById('command-output');

let activeDoc = null; 
let loading = true;

async function runTryCommand(ID, COMMAND) {

    switch(ID) {
        case 3:
            let loadInput = document.getElementById('loadInput');

            if(loadInput.value.length > 0) {
                let name = loadInput.value; 
                terminalText.innerHTML = `MSM["${name}"].loadImage("drawImg")`; 
                await eval(`MSM["${name}"].loadImage("drawImg")`);
                monsterName.innerHTML = `${name}`; 
            } else {
                monsterName.innerHTML = `Epic Astropod`; 
                terminalText.innerHTML = `${COMMAND}`;
                await eval(COMMAND)
            } 
            
            consoleOutput.innerHTML = `>_ Loaded Image!`
        break;

        case 5:
            terminalText.innerHTML = `${COMMAND}`;
            let results = await eval(COMMAND);
            consoleOutput.innerHTML = `>_ ${results}`
        break;

        case 'reset':
            monsterName.innerHTML = `Epic Spunge`; 
            await loadMonsterImg()
            terminalText.innerHTML = `<i>Commands Will Appear Here</i>`; 
            consoleOutput.innerHTML = `<i>>_ Results Will Appear Here</i>`
        break;

    }
}

tryButton.addEventListener('click', () => {
    runTryCommand(activeDoc, documents[activeDoc].COMMAND);
})

search.addEventListener('input', (e) => {
    if(search.value.length > 0) {
        capitalizeSearch();
        loadDocs("remove");
        loadDocs();
    } else {
        loadDocs("remove"); 
        loadDocs("ALL");
    }
});

function capitalizeSearch() {
     if (search.value !== "") {
        let getFirstLetter = search.value.slice(0,1);
        let getRest = search.value.slice(1,search.value.length);
        let capitalizeFirstLetter = getFirstLetter.toUpperCase(); 

        search.value = capitalizeFirstLetter + getRest; 
    }
}

function loadDocs(DOCS_TO_LOAD) {

    documents.forEach((DOC) => {
        const infoContainer = document.getElementById("infoContainer"); 
        const infoTitle = document.getElementById("infoTitle"); 
        const docDiv = document.createElement("div"); 
        docDiv.classList.add("doc-div")
        
        const removalDiv = infoContainer.querySelectorAll('.doc-div');

        docDiv.style.backgroundColor = 'black';            

        docDiv.style.width = '90%'; 
        docDiv.style.height = '25px'; 

        docDiv.style.border = '2px solid grey'; 
        docDiv.style.marginLeft = '10px';
        docDiv.style.marginTop = '10px';

        docDiv.addEventListener("mouseover", () => {
            if(DOC.ID !== activeDoc) {
                docDiv.style.backgroundColor = 'transparent';
            }
        });

        docDiv.addEventListener("mouseleave", () => {
            if(DOC.ID !== activeDoc) {
                docDiv.style.backgroundColor = 'black';
            }
        });


        docDiv.addEventListener("click", () => {
            activeDoc = DOC.ID; 

            loadDocs("colorReset");

            docDiv.style.backgroundColor = 'white';

            infoTitle.innerHTML = `<u>❖ - ${DOC.NAME} - ❖</u>`; 
            info_desc.innerHTML = `${DOC.DESCRIPTION}`;

            runTryCommand('reset');
            
            if (DOC.CAN_TRY) {
                tryButton.style.display = 'block'; 
            } else {
                tryButton.style.display = 'none'; 
            }
        });

        docDiv.innerHTML = `${DOC.NAME}`; 
        

        if(DOCS_TO_LOAD !== "remove" && DOCS_TO_LOAD !== "colorReset" && search.value.slice(0,1) === DOC.NAME.slice(0,1)) {
            // IF YOU ADD ANYTHING DOCS_TO_LOAD WISE UPDATE IT HERE!!!
            infoContainer.appendChild(docDiv);

        } 

        
        if(DOCS_TO_LOAD === "colorReset") {
            removalDiv.forEach(div => div.style.backgroundColor = 'black');
        }

        if(DOCS_TO_LOAD === "remove") {
            removalDiv.forEach(div => div.remove());
        }

        if (DOCS_TO_LOAD === "ALL") {
            infoContainer.appendChild(docDiv);
            if(loading && DOC.NAME === "Getting Started") {
               docDiv.click(); 
               loading = false; 
            }
        }

    });
}

function onLoad() {
    tryButton.style.display = 'none';
    search.value = ""; 
    loadDocs("ALL");
}

onLoad();

