var list = [];
var dossierPage = "dossier.html";

/**
 * Draw Dossier Page...
 */

 function drawDossierPage(){
     var form = document.querySelector("form#editForm div.row");
     var i = window.location.search.substring(4);
     var str = `
        <div class="form-group col-md-2 col-lg-3">
            <label><strong>${list.dossiers[i].Number}</strong></label> <input type="text" name="Name" value="Dossier Name" class="form-control form-control-sm shadow-sm" readonly>
        </div>
         `;
     form.innerHTML = str;
 }

/**
 * What to do if you submit the form...
 */

 function postTheSearchResults(form, event){
     var searchIndex = document.querySelectorAll("form input[type='search']");
     event.preventDefault();
     searchIndex.forEach(element => {
         if(element.name === "Dossier" && element.value !== ""){
            for(var i in list.dossiers){
                // what to do if you search for a dossier
                var matches = list.dossiers.filter(dossier => {
                    const regex = new RegExp(`^${element.value}`, "gi");
                    return dossier.Number.match(regex);
                });
            }
            if(matches.length === 0){
                document.querySelector("section#dossier header").innerHTML = `<h3 class="text-secondary">No Dossier found for <em>"${element.value}"</em> !</h3>`;
                document.querySelector("section#dossier").classList.remove("d-none");
                document.querySelector("section#dossier table").classList.add("d-none");
            }else{
                const options = matches.map(match => `
                    <tr onclick="javascript:window.location = 'dossier.html?id=${match.Number}'">
                        <th scope="row">${match.Number}</th>
                        <td>${match.Date}</td>
                        <td>${match.Requester}</td>
                        <td>${match.Broker}</td>
                        <td>${match.Client}</td>
                        <td>${match.Value} $</td>
                        <td>${match.Location}</td>
                        <td>${match.Attribute01}</td>
                        <td>${match.Attribute02}</td>
                    </tr>
                `).join("");
                document.querySelector("section#dossier header").innerHTML = `<h3 class="text-success">Dossiers Found!</h3>`;
                document.querySelector("section#dossier").classList.remove("d-none");
                document.querySelector("section#dossier table").classList.remove("d-none");
                document.querySelector("section#dossier table tbody").innerHTML = options;
            }
         }else if(element.name === "Contract" && element.value !== ""){
            for(var i in list.contracts){
                // what to do if you search for a contract
                var matches = list.contracts.filter(contract => {
                    const regex = new RegExp(`^${element.value}`, "gi");
                    return contract.Number.match(regex);
                });
            }
            if(matches.length === 0){
                document.querySelector("section#contract header").innerHTML = `<h3 class="text-secondary">No Contract found for <em>"${element.value}"</em> !</h3>`;
                document.querySelector("section#contract").classList.remove("d-none");
                document.querySelector("section#contract table").classList.add("d-none");
            }else{
                const options = matches.map(match => `
                    <tr onclick="javascript:window.location = 'contract.html?id=${match.Number}'">
                        <th scope="row">${match.Number}</th>
                        <td>${match.Date}</td>
                        <td>${match.Requester}</td>
                        <td>${match.Broker}</td>
                        <td>${match.Client}</td>
                        <td>${match.Value} $</td>
                        <td>${match.Location}</td>
                        <td>${match.Attribute01}</td>
                        <td>${match.Attribute02}</td>
                    </tr>
                `).join("");
                document.querySelector("section#contract header").innerHTML = `<h3 class="text-success">Contracts Found!</h3>`;
                document.querySelector("section#contract").classList.remove("d-none");
                document.querySelector("section#contract table").classList.remove("d-none");
                document.querySelector("section#contract table tbody").innerHTML = options;
            }
         }
     });
     form.reset();
 }

/**
 * Hide the Search Suggestions List on click out...
 */

function hideMatchList(){
    window.addEventListener("click", function(){
        document.querySelector("#matchList").innerHTML = "";
    });
}

/**
 * Add the Search Suggestion in the Search Input on click...
 */

function selected(index, name){
    document.querySelector(`input[name='${name}']`).value = index;
    document.querySelector("#matchList").innerHTML = "";
}

/**
 * Show the Search Suggestions...
 */

function outputHTML(matches, searchName){
    var matchList = document.querySelector("#matchList");
    if(matches.length > -1){
        const options = matches.map(match => `
            <a href="javascript:selected(${match.Number}, '${searchName}');" class="list-group-item list-group-item-action"><strong>${match.Number}</strong><small> - ${match.Client}</small></a>
        `).join("");
        document.querySelector(`input[name='${searchName}']`).insertAdjacentElement("afterend", matchList);
        document.querySelector("#matchList").innerHTML = options;
    }
}

/**
 * What to do if you type in one of the Search Inputs...
 */

function inputAction(input){
    var inputText = input.value;
    if(input.name === "Dossier"){
        // if you search for a dossier...
        var matches = list.dossiers.filter(dossier => {
            const regex = new RegExp(`^${inputText}`, "gi");
            return dossier.Number.match(regex);
        });
        // hide the suggestions list if the search input is empty
        if(inputText.length === 0){
            matches = [];
        }
        outputHTML(matches, input.name);
    }else if(input.name === "Contract"){
        // if you search for a contract...
        var matches = list.contracts.filter(contract => {
            const regex = new RegExp(`^${inputText}`, "gi");
            return contract.Number.match(regex);
        });
        // hide the suggestions list if the search input is empty
        if(inputText.length === 0){
            matches = [];
        }
        outputHTML(matches, input.name);
    }else{
        return;
    }
}

/**
 * Loop the Search Inputs...
 */

function loopTheSearchInput(){
    var searchInput = document.querySelectorAll("form input[type='search']");
    searchInput.forEach(element => {
        // what to do if you type in one of the search inputs
        element.addEventListener("input", function(){
            inputAction(element);
        });
    });
}

async function ajaxToJsonData(){
    var response = await fetch("./data/data.json");
    window.list = await response.json();
    loopTheSearchInput();
    hideMatchList();
    if(window.location.href.indexOf(dossierPage) > -1){
        drawDossierPage();
    }
}