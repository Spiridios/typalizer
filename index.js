var pokeData = new PokeData();

function toggleHighlightClass(classToFind, classToToggle) {
    let tds = document.getElementsByClassName(classToFind);
    if (tds && tds.length > 0) {
        if (tds[0].classList.contains(classToToggle)) {
            // Remove
            for (let i = 0; i < tds.length; i++) {
                tds[i].classList.remove(classToToggle);
            }
        } else {
            // Add
            for (let i = 0; i < tds.length; i++) {
                tds[i].classList.add(classToToggle);
            }
        }
    }
}

function updateAttacks(selectedDefense) {
    let strongAttacksP = document.getElementById("strongAttacks");
    let attackMap={};
    selectedDefense.forEach(type => {
        let d = pokeData.typeIndices[type];
        for(let a = 0; a < pokeData.numTypes; a++) {
            if (attackMap[a] == undefined) {
                attackMap[a] = pokeData.attackDefenseLookup[a][d];
            } else {
                attackMap[a] = attackMap[a] * pokeData.attackDefenseLookup[a][d];
            }
        }
    });

    strongAttacksP.innerHTML = "";
    for(const typeIdx in attackMap) {
        strongAttacksP.innerHTML += pokeData.typeNames[typeIdx] + ": " + attackMap[typeIdx] + "<br/>"
    }
}

selectedDefense=new Set();


function defenseClick(type) {
    if (selectedDefense.has(type)) {
        selectedDefense.delete(type);
    } else {
        selectedDefense.add(type);
    }
    updateAttacks(selectedDefense);
    toggleHighlightClass(type + "-Defense", "Defense-Highlight");
}

function attackClick(type) {
    toggleHighlightClass(type + "-Attack", "Attack-Highlight");
}


function createTypesTable() {
    let valueSymbol = {0.5: "½", 0: "0", 1: "", 2: "2"};
    let attackClass = {0.5: "weak", 0: "immune", 1: "normal", 2: "strong"};

    let typesTable = document.getElementById("typesTable");
    let tr = document.createElement("tr");
    let lth = document.createElement("td");
    lth.innerHTML = "Defense →<br/><br/>Attack ⤵";
    lth.className = "split";
    tr.appendChild(lth);
    lth = document.createElement("td");
    lth.innerHTML = "Combined";
    lth.className = "defense";
    tr.appendChild(lth);
    // Defense headers
    for (let i = 0; i < pokeData.numTypes;i++) {
        let defenseTypeName=pokeData.githubData[i].name;
        let th = document.createElement("td");
        th.innerText = defenseTypeName;
        th.classList.add('defense', defenseTypeName + "-Defense");

        th.onclick = function() {defenseClick(defenseTypeName);};
        tr.appendChild(th);
    }
    typesTable.appendChild(tr);

    // Attacks and their values
    for (let a = 0; a < pokeData.numTypes;a++) {
        tr = document.createElement("tr");
        let attackTypeName = pokeData.typeNames[a];
        let th = document.createElement("td");
        th.innerText = attackTypeName;
        th.classList.add('attack', attackTypeName + "-Attack");
        th.onclick = function() {attackClick(attackTypeName);};
        tr.appendChild(th);
        th = document.createElement("td");
        th.classList.add('combined-attack', attackTypeName + "-Attack");
        tr.appendChild(th);

        for (let d = 0; d < pokeData.numTypes; d++) {
            let defenseTypeName = pokeData.githubData[d].name;
            let td = document.createElement("td");
            let attackValue = pokeData.attackDefenseLookup[a][d];
            td.innerText = valueSymbol[attackValue];
            td.classList.add(attackClass[attackValue],  attackTypeName + "-" + defenseTypeName, attackTypeName + "-Attack", defenseTypeName + "-Defense");

            tr.appendChild(td);
        }
        typesTable.appendChild(tr);
    }
}

function onload() {
    createTypesTable();
}