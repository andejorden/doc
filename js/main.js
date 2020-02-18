var list = [];

/**
 * Compare Arrays
 */

function compare(){
    // dsag
 }

/**
 * Create jSON Data from Contract Search Results...
 */

 async function pushTheContractSearchResults(contractMatches){
    response = await fetch(`https://listadatabase.firebaseio.com/searchResults/contracts/.json`,{method:"put", body:JSON.stringify(contractMatches)});
 }



/**
 * Create jSON Data from Dossier Search Results...
 */

 async function pushTheDossierSearchResults(dossierMatches){
    response = await fetch(`https://listadatabase.firebaseio.com/searchResults/dossiers/.json`,{method:"put", body:JSON.stringify(dossierMatches)});
 }

 /**
  * Draw Contract Page...
  */

 function drawContractPage(){
    var form = document.querySelector("form#editForm div.row");
    var options = "";
    var i = window.location.search.substring(4);
    var str = `
       <div class="form-group col-sm-12 col-md-4 col-lg-6">
           <label class="text-success d-inline">Contract Number: <input type="text" name="Number" value="${list.contracts[i].Number}" class="form-control shadow-sm" readonly></label>
       </div>
       <div class="form-group col-sm-12 col-md-4 col-lg-6">
           <label class="text-success d-inline">Contract Date: <input type="text" name="Number" value="${list.contracts[i].Date}" class="form-control shadow-sm" readonly></label>
       </div>
       <div class="form-group col-sm-12 col-md-4 col-lg-6">
           <label class="text-success d-inline">Contract Requester: <input type="text" name="Number" value="${list.contracts[i].Requester}" class="form-control shadow-sm" readonly></label>
       </div>
       <div class="form-group col-sm-12 col-md-4 col-lg-6">
           <label class="text-success d-inline">Contract Broker: <input type="text" name="Number" value="${list.contracts[i].Broker}" class="form-control shadow-sm" readonly></label>
       </div>
       <div class="form-group col-sm-12 col-md-4 col-lg-6">
           <label class="text-success d-inline">Contract Customer: <input type="text" name="Number" value="${list.contracts[i].Client}" class="form-control shadow-sm" readonly></label>
       </div>
       <div class="form-group col-sm-12 col-md-4 col-lg-6">
           <label class="text-success d-inline">Contract Value: <input type="text" name="Number" value="${list.contracts[i].Value}" class="form-control shadow-sm" readonly></label>
       </div>
       <div class="form-group col-sm-12 col-md-4 col-lg-6">
           <label class="text-success d-inline">Contract Location: <input type="text" name="Number" value="${list.contracts[i].Location}" class="form-control shadow-sm" readonly></label>
       </div>
       <div class="form-group col-sm-12 col-md-4 col-lg-6">
           <label class="text-success d-inline">Contract Attribute 01: <input type="text" name="Number" value="${list.contracts[i].Attribute01}" class="form-control shadow-sm" readonly></label>
       </div>
       <div class="form-group col-sm-12 col-md-4 col-lg-6">
           <label class="text-success d-inline">Contract Attribute 02: <input type="text" name="Number" value="${list.contracts[i].Attribute02}" class="form-control shadow-sm" readonly></label>
       </div>
     `;

    for(var i in list.searchResults.contracts){
        if(list.searchResults.contracts[i] !== -1){
            options += `
                <tr>
                    <th scope="row">${list.searchResults.contracts[i].Number}</th>
                    <td>${list.searchResults.contracts[i].Date}</td>
                    <td>${list.searchResults.contracts[i].Requester}</td>
                    <td>${list.searchResults.contracts[i].Broker}</td>
                    <td>${list.searchResults.contracts[i].Client}</td>
                    <td>${list.searchResults.contracts[i].Value} $</td>
                    <td>${list.searchResults.contracts[i].Location}</td>
                    <td>${list.searchResults.contracts[i].Attribute01}</td>
                    <td>${list.searchResults.contracts[i].Attribute02}</td>
                </tr>
            `;
            document.querySelector("section#dossier header").innerHTML = `<h3 class="text-success">Contracts Found!</h3>`;
            document.querySelector("section#dossier").classList.remove("d-none");
            document.querySelector("section#dossier table").classList.remove("d-none");
            document.querySelector("section#dossier table tbody").innerHTML = options;
        }
    }
    if(options === ""){
        document.querySelector("section#dossier header").innerHTML = `<h3 class="text-secondary">No Contract found for <em>"${element.value}"</em> !</h3>`;
        document.querySelector("section#dossier").classList.remove("d-none");
        document.querySelector("section#dossier table").classList.add("d-none");
    }
    form.innerHTML = str;
}

/**
 * Draw Dossier Page...
 */

 function drawDossierPage(){
     var form = document.querySelector("form#editForm div.row");
     var options = "";
     var i = window.location.search.substring(4);
     var str = `
        <div class="form-group col-sm-12 col-md-4 col-lg-6">
            <label class="text-success d-inline">Dossier Number: <input type="text" name="Number" value="${list.dossiers[i].Number}" class="form-control shadow-sm" readonly></label>
        </div>
        <div class="form-group col-sm-12 col-md-4 col-lg-6">
            <label class="text-success d-inline">Dossier Date: <input type="text" name="Number" value="${list.dossiers[i].Date}" class="form-control shadow-sm" readonly></label>
        </div>
        <div class="form-group col-sm-12 col-md-4 col-lg-6">
            <label class="text-success d-inline">Dossier Requester: <input type="text" name="Number" value="${list.dossiers[i].Requester}" class="form-control shadow-sm" readonly></label>
        </div>
        <div class="form-group col-sm-12 col-md-4 col-lg-6">
            <label class="text-success d-inline">Dossier Broker: <input type="text" name="Number" value="${list.dossiers[i].Broker}" class="form-control shadow-sm" readonly></label>
        </div>
        <div class="form-group col-sm-12 col-md-4 col-lg-6">
            <label class="text-success d-inline">Dossier Customer: <input type="text" name="Number" value="${list.dossiers[i].Client}" class="form-control shadow-sm" readonly></label>
        </div>
        <div class="form-group col-sm-12 col-md-4 col-lg-6">
            <label class="text-success d-inline">Dossier Value: <input type="text" name="Number" value="${list.dossiers[i].Value}" class="form-control shadow-sm" readonly></label>
        </div>
        <div class="form-group col-sm-12 col-md-4 col-lg-6">
            <label class="text-success d-inline">Dossier Location: <input type="text" name="Number" value="${list.dossiers[i].Location}" class="form-control shadow-sm" readonly></label>
        </div>
        <div class="form-group col-sm-12 col-md-4 col-lg-6">
            <label class="text-success d-inline">Dossier Attribute 01: <input type="text" name="Number" value="${list.dossiers[i].Attribute01}" class="form-control shadow-sm" readonly></label>
        </div>
        <div class="form-group col-sm-12 col-md-4 col-lg-6">
            <label class="text-success d-inline">Dossier Attribute 02: <input type="text" name="Number" value="${list.dossiers[i].Attribute02}" class="form-control shadow-sm" readonly></label>
        </div>
      `;

      for(var i in list.searchResults.dossiers){
          if(list.searchResults.dossiers[i] !== -1){
              options += `
                  <tr>
                      <th scope="row">${list.searchResults.dossiers[i].Number}</th>
                      <td>${list.searchResults.dossiers[i].Date}</td>
                      <td>${list.searchResults.dossiers[i].Requester}</td>
                      <td>${list.searchResults.dossiers[i].Broker}</td>
                      <td>${list.searchResults.dossiers[i].Client}</td>
                      <td>${list.searchResults.dossiers[i].Value} $</td>
                      <td>${list.searchResults.dossiers[i].Location}</td>
                      <td>${list.searchResults.dossiers[i].Attribute01}</td>
                      <td>${list.searchResults.dossiers[i].Attribute02}</td>
                  </tr>
              `;
              document.querySelector("section#dossier header").innerHTML = `<h3 class="text-success">Dossiers Found!</h3>`;
              document.querySelector("section#dossier").classList.remove("d-none");
              document.querySelector("section#dossier table").classList.remove("d-none");
              document.querySelector("section#dossier table tbody").innerHTML = options;
          }
      }
      if(options === ""){
        dossiers.querySelector("section#dossier header").innerHTML = `<h3 class="text-secondary">No Dossiers found for <em>"${element.value}"</em> !</h3>`;
        dossiers.querySelector("section#dossier").classList.remove("d-none");
          document.querySelector("section#dossier table").classList.add("d-none");
      }
      form.innerHTML = str;
 }

/**
 * What to do if you Submit The Form...
 */

 function postTheSearchResults(form, event){
     var searchIndex = document.querySelectorAll("form input[type='search']");
     event.preventDefault();
     searchIndex.forEach(element => {
         if(element.name === "Dossier"){
            // what to do if you search for a dossier
            var options = "";
            for(var i in list.dossiers){
                if(list.dossiers[i].Number.indexOf(element.value) !== -1){
                    var matches = list.dossiers.filter(dossier => {
                        const regex = new RegExp(`${element.value}`, "gi");
                        return dossier.Number.match(regex);
                    });
                    pushTheDossierSearchResults(matches);
                    options += `
                        <tr onclick="javascript:window.location = 'dossier.html?id=${i}'">
                            <th scope="row">${list.dossiers[i].Number}</th>
                            <td>${list.dossiers[i].Date}</td>
                            <td>${list.dossiers[i].Requester}</td>
                            <td>${list.dossiers[i].Broker}</td>
                            <td>${list.dossiers[i].Client}</td>
                            <td>${list.dossiers[i].Value} $</td>
                            <td>${list.dossiers[i].Location}</td>
                            <td>${list.dossiers[i].Attribute01}</td>
                            <td>${list.dossiers[i].Attribute02}</td>
                        </tr>
                    `;
                    document.querySelector("section#dossier header").innerHTML = `<h3 class="text-success">Dossiers Found!</h3>`;
                    document.querySelector("section#dossier").classList.remove("d-none");
                    document.querySelector("section#dossier table").classList.remove("d-none");
                    document.querySelector("section#dossier table tbody").innerHTML = options;
                }
            }
            if(options === ""){
                document.querySelector("section#dossier header").innerHTML = `<h3 class="text-secondary">No Dossier found for <em>"${element.value}"</em> !</h3>`;
                document.querySelector("section#dossier").classList.remove("d-none");
                document.querySelector("section#dossier table").classList.add("d-none");
            }
         }else if(element.name === "Contract"){
            // what to do if you search for a contract
            var options = "";
            for(var i in list.contracts){
                var matches = list.contracts.filter(contract => {
                    const regex = new RegExp(`${element.value}`, "gi");
                    return contract.Number.match(regex);
                });
                if(list.contracts[i].Number.indexOf(element.value) !== -1){
                    pushTheContractSearchResults(matches);
                    options += `
                        <tr onclick="javascript:window.location = 'contract.html?id=${i}'">
                            <th scope="row">${list.contracts[i].Number}</th>
                            <td>${list.contracts[i].Date}</td>
                            <td>${list.contracts[i].Requester}</td>
                            <td>${list.contracts[i].Broker}</td>
                            <td>${list.contracts[i].Client}</td>
                            <td>${list.contracts[i].Value} $</td>
                            <td>${list.contracts[i].Location}</td>
                            <td>${list.contracts[i].Attribute01}</td>
                            <td>${list.contracts[i].Attribute02}</td>
                        </tr>
                    `;
                    document.querySelector("section#contract header").innerHTML = `<h3 class="text-success">Contracts Found!</h3>`;
                    document.querySelector("section#contract").classList.remove("d-none");
                    document.querySelector("section#contract table").classList.remove("d-none");
                    document.querySelector("section#contract table tbody").innerHTML = options;
                }
            }
            if(options === ""){
                document.querySelector("section#contract header").innerHTML = `<h3 class="text-secondary">No Contract found for <em>"${element.value}"</em> !</h3>`;
                document.querySelector("section#contract").classList.remove("d-none");
                document.querySelector("section#contract table").classList.add("d-none");
            }
         }
     });
     form.reset();
 }

/**
 * Hide the Search Suggestions List on click out...
 */

function hideMatchList(){
    if(window.location.href.indexOf("index.html")){
        window.addEventListener("click", function(){
            document.querySelector("#matchList").innerHTML = "";
        });
    }else{
        return;
    }
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
            const regex = new RegExp(`${inputText}`, "gi");
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
            const regex = new RegExp(`${inputText}`, "gi");
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

/**
 * Draw the Pages...
 */

 function draw(){
     console.log(window.location.pathname);
     if(window.location.href.indexOf("index.html") > -1 || window.location.pathname === "/doc/"){
         loopTheSearchInput();
         hideMatchList();
         compare();
     }else if(window.location.href.indexOf("dossier.html") > -1){
         drawDossierPage();
     }else if(window.location.href.indexOf("contract.html") > -1){
        drawContractPage();
     }
 }

/**
 * Fetch the Data...
 */

async function ajaxToJsonData(){
    var response = await fetch("https://listadatabase.firebaseio.com/.json");
    window.list = await response.json();
    draw();
}
