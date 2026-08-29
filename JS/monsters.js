const search = document.getElementById('search');
let info_desc = document.getElementById('infoDescription');
let tryButton = document.getElementById('tryCommand'); 

let documents = [
    {
        ID: 0,
        NAME: "Getting Started",
        DESCRIPTION: `Welcome to the MSM API Docs! :) <br> Here you will find documentation on how to <br> load all information about ANY monster. Information includes: <br> Images, Breeding Times, Costs, and much more! <br> Explore the documents on the left side panel for futher details and information!`,
        CAN_TRY: false
    },
    {
        ID: 1,
        NAME: "MSM.help()",
        DESCRIPTION: `The method <code>MSM.help()</code> is a simple and quick way to retrieve quick commands for your projects. For example, this method will give you commands to display monster images in your project. It also gives you the git repository link, the mode your browser is running the API, and gives you the API's current version number.`,
        CAN_TRY: false
    }
]

search.addEventListener('input', (e) => {
    if(search.value.length > 0) {
        capitalizeSearch();
        loadDocs("remove");
        loadDocs() 
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

        docDiv.style.width = '90%'; 
        docDiv.style.height = '25px'; 
        docDiv.style.backgroundColor = 'black'
        docDiv.style.border = '2px solid grey'; 
        docDiv.style.marginLeft = '10px';
        docDiv.style.marginTop = '10px';

        docDiv.addEventListener("mouseover", () => {
            docDiv.style.backgroundColor = 'transparent';
        });

        docDiv.addEventListener("mouseleave", () => {
            docDiv.style.backgroundColor = 'black'
        });

        docDiv.addEventListener("click", () => {
            infoTitle.innerHTML = `<u>❖ - ${DOC.NAME} - ❖</u>`; 
            info_desc.innerHTML = `${DOC.DESCRIPTION}`;
            if (DOC.CAN_TRY) {
                tryButton.style.display = 'block'; 
            } else {
                tryButton.style.display = 'none'; 
            }
        });

        docDiv.innerHTML = `${DOC.NAME}`; 
        

        if(DOCS_TO_LOAD !== "remove" && search.value.slice(0,1) === DOC.NAME.slice(0,1)) {

            infoContainer.appendChild(docDiv);

        } 

        if (DOCS_TO_LOAD === "ALL") {
           
            infoContainer.appendChild(docDiv);

        }

        if(DOCS_TO_LOAD === "remove") {
            removalDiv.forEach(div => div.remove());
        }

    });

}

function onLoad() {
    tryButton.style.display = 'none'; 
    loadDocs("ALL");
}

onLoad();

