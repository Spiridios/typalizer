var pokeData = new PokeData();
let valueSymbols = {0.0625: "1/16", 0.125: "⅛", 0.25: "¼", 0.5: "½", 1: ""};
let selectedDefense = [];
let selectedAttacks = [];
let maxAttacks = 0;
let maxDefense = 2;

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
        if (tds.length > 0) {
            let td = tds[0];

            if (attackMap[typeIdx] != undefined) {
                td.innerText = valueSymbols[attackMap[typeIdx]] === undefined
                    ? attackMap[typeIdx] : valueSymbols[attackMap[typeIdx]];
            } else {
                td.innerText = "";
            }
        }
    }
}

function defenseClick(type) {
    if (selectedDefense.includes(type)) {
        selectedDefense = selectedDefense.filter(e => e !== type)
    } else {
        selectedDefense.push(type);
    }

    if (maxDefense > 0 && selectedDefense.length > maxDefense) {
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

    while(selectedAttacks.length > 0) {
        let type = selectedAttacks.pop();
        toggleHighlightClass(type + "-Attack", "Attack-Highlight");
    }
}

function attackClick(type) {
    if (selectedAttacks.includes(type)) {
        selectedAttacks = selectedAttacks.filter(e => e !== type)
    } else {
        selectedAttacks.push(type);
    }

    if (maxAttacks > 0 && selectedAttacks.length > maxAttacks) {
        let removedType = selectedAttacks.shift();
        toggleHighlightClass(removedType + "-Attack", "Attack-Highlight");
    }

    toggleHighlightClass(type + "-Attack", "Attack-Highlight");
}

function createTypesTable() {
    let attackClass = {0.5: "weak", 0: "immune", 1: "normal", 2: "strong"};

    clearSelection();

    let typesTable = document.getElementById("typesTable");
    // Make sure table is empty
    let child = typesTable.lastElementChild;
    while (child) {
        typesTable.removeChild(child);
        child = typesTable.lastElementChild;
    }

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
        let defenseTypeName=pokeData.activeData[i].name;
        let th = document.createElement("td");
        th.innerText = defenseTypeName;
        th.classList.add('Defense', defenseTypeName + "-Defense", defenseTypeName + "-Header");

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
        th.classList.add('Attack', attackTypeName + "-Attack", attackTypeName + "-Header");
        th.onclick = function() {attackClick(attackTypeName);};
        tr.appendChild(th);
        th = document.createElement("td");
        th.classList.add('Combined-Attack', attackTypeName + "-Combined-Attack");
        tr.appendChild(th);

        for (let d = 0; d < pokeData.numTypes; d++) {
            let defenseTypeName = pokeData.activeData[d].name;
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

function generationChanged() {
    pokemonGen = document.getElementById("pokemonGen");
    switch(pokemonGen.value) {
        case('P1'):
            pokeData.setData(pokeData.palData);
            break;
        case('1'):
            pokeData.setData(pokeData.genIData);
            break;
        case('2'):
            pokeData.setData(pokeData.genIIthruVData);
            break;
        case('6'):
            pokeData.setData(pokeData.genVIData);
            break;
    }
    createTypesTable();
}

function onload() {
    createTypesTable();
}