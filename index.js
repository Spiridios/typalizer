var pokeData = new PokeData();
let valueSymbols = {0.0625: "1/16", 0.125: "⅛", 0.25: "¼", 0.5: "½", 1: ""};
let selectedDefense = [];

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

    for (let typeIdx = 0; typeIdx < pokeData.numTypes; typeIdx ++) {
        let tds = document.getElementsByClassName(pokeData.typeNames[typeIdx] + "-Combined-Attack");
        let td = tds[0];

        if (attackMap[typeIdx] != undefined) {
            td.innerText = valueSymbols[attackMap[typeIdx]] === undefined
                ? attackMap[typeIdx] : valueSymbols[attackMap[typeIdx]];
        } else {
            td.innerText = "";
        }
    }
}

function defenseClick(type) {
    if (selectedDefense.includes(type)) {
        selectedDefense = selectedDefense.filter(e => e !== type)
    } else {
        selectedDefense.push(type);
    }

    if (selectedDefense.length > 2) {
        let removedType = selectedDefense.shift();
        toggleHighlightClass(removedType + "-Defense", "Defense-Highlight");
    }

    updateAttacks(selectedDefense);
    toggleHighlightClass(type + "-Defense", "Defense-Highlight");
}

function clearSelection() {
    while(selectedDefense.length > 0) {
        let type = selectedDefense.pop();
        toggleHighlightClass(type + "-Defense", "Defense-Highlight");
    }
    updateAttacks(selectedDefense);
}

function attackClick(type) {
    toggleHighlightClass(type + "-Attack", "Attack-Highlight");
}


function createTypesTable() {
    let attackClass = {0.5: "weak", 0: "immune", 1: "normal", 2: "strong"};

    let typesTable = document.getElementById("typesTable");
    let tr = document.createElement("tr");
    let lth = document.createElement("td");
    lth.innerHTML = "Defense →<br/><br/>Attack ⤵";
    lth.className = "Split";
    tr.appendChild(lth);
    lth = document.createElement("td");
    lth.innerHTML = "Combined";
    lth.className = "Defense";
    tr.appendChild(lth);
    // Defense headers
    for (let i = 0; i < pokeData.numTypes;i++) {
        let defenseTypeName=pokeData.githubData[i].name;
        let th = document.createElement("td");
        th.innerText = defenseTypeName;
        th.classList.add('Defense', defenseTypeName + "-Defense");

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
        th.classList.add('Attack', attackTypeName + "-Attack");
        th.onclick = function() {attackClick(attackTypeName);};
        tr.appendChild(th);
        th = document.createElement("td");
        th.classList.add('Combined-Attack', attackTypeName + "-Combined-Attack");
        tr.appendChild(th);

        for (let d = 0; d < pokeData.numTypes; d++) {
            let defenseTypeName = pokeData.githubData[d].name;
            let td = document.createElement("td");
            let attackValue = pokeData.attackDefenseLookup[a][d];
            td.innerText = valueSymbols[attackValue] === undefined
                ? attackValue : valueSymbols[attackValue];
            td.classList.add(attackClass[attackValue],  attackTypeName + "-" + defenseTypeName, attackTypeName + "-Attack", defenseTypeName + "-Defense");

            tr.appendChild(td);
        }
        typesTable.appendChild(tr);
    }
}

function onload() {
    createTypesTable();
}