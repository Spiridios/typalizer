class PokeData {
/*     githubData=[{"name":"Normal","immunes":["Ghost"],"weaknesses":["Rock","Steel"],"strengths":[]},
    {"name":"Fire","immunes":[],"weaknesses":["Fire","Water","Rock","Dragon"],"strengths":["Grass","Ice","Bug","Steel"]},
    {"name":"Water","immunes":[],"weaknesses":["Water","Grass","Dragon"],"strengths":["Fire","Ground","Rock"]},
    {"name":"Electric","immunes":["Ground"],"weaknesses":["Electric","Grass","Dragon"],"strengths":["Water","Flying"]},
    {"name":"Grass","immunes":[],"weaknesses":["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],"strengths":["Water","Ground","Rock"]},
    {"name":"Ice","immunes":[],"weaknesses":["Fire","Water","Ice","Steel"],"strengths":["Grass","Ground","Flying","Dragon"]},
    {"name":"Fighting","immunes":["Ghost"],"weaknesses":["Poison","Flying","Psychic","Bug","Fairy"],"strengths":["Normal","Ice","Rock","Dark","Steel"]},
    {"name":"Poison","immunes":["Steel"],"weaknesses":["Poison","Ground","Rock","Ghost"],"strengths":["Grass","Fairy"]},
    {"name":"Ground","immunes":["Flying"],"weaknesses":["Grass","Bug"],"strengths":["Fire","Electric","Poison","Rock","Steel"]},
    {"name":"Flying","immunes":[],"weaknesses":["Electric","Rock","Steel"],"strengths":["Grass","Fighting","Bug"]},
    {"name":"Psychic","immunes":["Dark"],"weaknesses":["Psychic","Steel"],"strengths":["Fighting","Poison"]},
    {"name":"Bug","immunes":[],"weaknesses":["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],"strengths":["Grass","Psychic","Dark"]},
    {"name":"Rock","immunes":[],"weaknesses":["Fighting","Ground","Steel"],"strengths":["Fire","Ice","Flying","Bug"]},
    {"name":"Ghost","immunes":["Normal"],"weaknesses":["Dark"],"strengths":["Psychic","Ghost"]},
    {"name":"Dragon","immunes":["Fairy"],"weaknesses":["Steel"],"strengths":["Dragon"]},
    {"name":"Dark","immunes":[],"weaknesses":["Fighting","Dark","Fairy"],"strengths":["Psychic","Ghost"]},
    {"name":"Steel","immunes":[],"weaknesses":["Fire","Water","Electric","Steel"],"strengths":["Ice","Rock","Fairy"]},
    {"name":"Fairy","immunes":[],"weaknesses":["Fire","Poison","Steel"],"strengths":["Fighting","Dragon","Dark"]}];
 */
    genVIData=[{"name": "Normal", "immunes": ["Ghost"], "weaknesses": ["Rock", "Steel"], "strengths": []},
    {"name": "Fire", "immunes": [], "weaknesses": ["Rock", "Fire", "Water", "Dragon"], "strengths": ["Bug", "Steel", "Grass", "Ice"]},
    {"name": "Water", "immunes": [], "weaknesses": ["Water", "Grass", "Dragon"], "strengths": ["Ground", "Rock", "Fire"]},
    {"name": "Electric", "immunes": ["Ground"], "weaknesses": ["Grass", "Electric", "Dragon"], "strengths": ["Flying", "Water"]},
    {"name": "Grass", "immunes": [], "weaknesses": ["Flying", "Poison", "Bug", "Steel", "Fire", "Grass", "Dragon"], "strengths": ["Ground", "Rock", "Water"]},
    {"name": "Ice", "immunes": [], "weaknesses": ["Steel", "Fire", "Water", "Ice"],"strengths": ["Flying", "Ground", "Grass", "Dragon"]},
    {"name": "Fighting", "immunes": ["Ghost"], "weaknesses": ["Flying", "Poison", "Bug", "Psychic", "Fairy"], "strengths": ["Normal", "Rock", "Steel", "Ice", "Dark"]},
    {"name": "Poison", "immunes": ["Steel"], "weaknesses": ["Poison", "Ground", "Rock", "Ghost"], "strengths": ["Grass", "Fairy"]},
    {"name": "Ground", "immunes": ["Flying"], "weaknesses": ["Bug", "Grass"], "strengths": ["Poison", "Rock", "Steel", "Fire", "Electric"]},
    {"name": "Flying", "immunes": [], "weaknesses": ["Rock", "Steel", "Electric"], "strengths": ["Fighting", "Bug", "Grass"]},
    {"name": "Psychic", "immunes": ["Dark"], "weaknesses": ["Steel", "Psychic"], "strengths": ["Fighting", "Poison"]},
    {"name": "Bug", "immunes": [], "weaknesses": ["Fighting", "Flying", "Poison", "Ghost", "Steel", "Fire", "Fairy"], "strengths": ["Grass", "Psychic", "Dark"]},
    {"name": "Rock", "immunes": [], "weaknesses": ["Fighting", "Ground", "Steel"], "strengths": ["Flying", "Bug", "Fire", "Ice"]},
    {"name": "Ghost", "immunes": ["Normal"], "weaknesses": ["Dark"], "strengths": ["Ghost", "Psychic"]},
    {"name": "Dragon", "immunes": ["Fairy"], "weaknesses": ["Steel"], "strengths": ["Dragon"]},
    {"name": "Dark", "immunes": [], "weaknesses": ["Fighting", "Dark", "Fairy"], "strengths": ["Ghost", "Psychic"]},
    {"name": "Steel", "immunes": [], "weaknesses": ["Steel", "Fire", "Water", "Electric"], "strengths": ["Rock", "Ice", "Fairy"]},
    {"name": "Fairy", "immunes": [], "weaknesses": ["Poison", "Steel", "Fire"], "strengths": ["Fighting", "Dragon", "Dark"]}];

    genIIthruVData=[{"name": "Normal", "immunes": ["Ghost"], "weaknesses": ["Rock", "Steel"], "strengths": []},
    {"name": "Fire", "immunes": [], "weaknesses": ["Rock", "Fire", "Water", "Dragon"], "strengths": ["Bug", "Steel", "Grass", "Ice"]},
    {"name": "Water", "immunes": [], "weaknesses": ["Water", "Grass", "Dragon"], "strengths": ["Ground", "Rock", "Fire"]},
    {"name": "Electric", "immunes": ["Ground"], "weaknesses": ["Grass", "Electric", "Dragon"], "strengths": ["Flying", "Water"]},
    {"name": "Grass", "immunes": [], "weaknesses": ["Flying", "Poison", "Bug", "Steel", "Fire", "Grass", "Dragon"], "strengths": ["Ground", "Rock", "Water"]},
    {"name": "Ice", "immunes": [], "weaknesses": ["Steel", "Fire", "Water", "Ice"], "strengths": ["Flying", "Ground", "Grass", "Dragon"]},
    {"name": "Fighting", "immunes": ["Ghost"], "weaknesses": ["Flying", "Poison", "Bug", "Psychic"], "strengths": ["Normal", "Rock", "Steel", "Ice", "Dark"]},
    {"name": "Poison", "immunes": ["Steel"], "weaknesses": ["Poison", "Ground", "Rock", "Ghost"], "strengths": ["Grass"]},
    {"name": "Ground", "immunes": ["Flying"], "weaknesses": ["Bug", "Grass"], "strengths": ["Poison", "Rock", "Steel", "Fire", "Electric"]},
    {"name": "Flying", "immunes": [], "weaknesses": ["Rock", "Steel", "Electric"], "strengths": ["Fighting", "Bug", "Grass"]},
    {"name": "Psychic", "immunes": ["Dark"], "weaknesses": ["Steel", "Psychic"], "strengths": ["Fighting", "Poison"]},
    {"name": "Bug", "immunes": [], "weaknesses": ["Fighting", "Flying", "Poison", "Ghost", "Steel", "Fire"], "strengths": ["Grass", "Psychic", "Dark"]},
    {"name": "Rock", "immunes": [], "weaknesses": ["Fighting", "Ground", "Steel"], "strengths": ["Flying", "Bug", "Fire", "Ice"]},
    {"name": "Ghost", "immunes": ["Normal"], "weaknesses": ["Steel", "Dark"], "strengths": ["Ghost", "Psychic"]},
    {"name": "Dragon", "immunes": [], "weaknesses": ["Steel"], "strengths": ["Dragon"]},
    {"name": "Dark", "immunes": [], "weaknesses": ["Fighting", "Steel", "Dark"], "strengths": ["Ghost", "Psychic"]},
    {"name": "Steel", "immunes": [], "weaknesses": ["Steel", "Fire", "Water", "Electric"], "strengths": ["Rock", "Ice"]}];

    genIData=[{"name": "Normal", "immunes": ["Ghost"], "weaknesses": ["Rock"], "strengths": []},
    {"name": "Fire", "immunes": [], "weaknesses": ["Rock", "Fire", "Water", "Dragon"], "strengths": ["Bug", "Grass", "Ice"]},
    {"name": "Water", "immunes": [], "weaknesses": ["Water", "Grass", "Dragon"], "strengths": ["Ground", "Rock", "Fire"]},
    {"name": "Electric", "immunes": ["Ground"], "weaknesses": ["Grass", "Electric", "Dragon"], "strengths": ["Flying", "Water"]},
    {"name": "Grass", "immunes": [], "weaknesses": ["Flying", "Poison", "Bug", "Fire", "Grass", "Dragon"], "strengths": ["Ground", "Rock", "Water"]},
    {"name": "Ice", "immunes": [], "weaknesses": ["Water", "Ice"], "strengths": ["Flying", "Ground", "Grass", "Dragon"]},
    {"name": "Fighting", "immunes": ["Ghost"], "weaknesses": ["Flying", "Poison", "Bug", "Psychic"], "strengths": ["Normal", "Rock", "Ice"]},
    {"name": "Poison", "immunes": [], "weaknesses": ["Poison", "Ground", "Rock", "Ghost"], "strengths": ["Bug", "Grass"]},
    {"name": "Ground", "immunes": ["Flying"], "weaknesses": ["Bug", "Grass"], "strengths": ["Poison", "Rock", "Fire", "Electric"]},
    {"name": "Flying", "immunes": [], "weaknesses": ["Rock", "Electric"], "strengths": ["Fighting", "Bug", "Grass"]},
    {"name": "Psychic", "immunes": [], "weaknesses": ["Psychic"], "strengths": ["Fighting", "Poison"]},
    {"name": "Bug", "immunes": [], "weaknesses": ["Fighting", "Flying", "Ghost", "Fire"], "strengths": ["Poison", "Grass", "Psychic"]},
    {"name": "Rock", "immunes": [], "weaknesses": ["Fighting", "Ground"], "strengths": ["Flying", "Bug", "Fire", "Ice"]},
    {"name": "Ghost", "immunes": ["Normal", "Psychic"], "weaknesses": [], "strengths": ["Ghost"]},
    {"name": "Dragon", "immunes": [], "weaknesses": [], "strengths": ["Dragon"]}]

    palData=[{"name": "Normal", "immunes": [], "weaknesses": [], "strengths": []},
    {"name": "Fire", "immunes": [], "weaknesses": ["Fire", "Water"], "strengths": ["Grass", "Ice"]},
    {"name": "Water", "immunes": [], "weaknesses": ["Water", "Electric"], "strengths": ["Fire"]},
    {"name": "Electric", "immunes": [], "weaknesses": ["Ground", "Electric"], "strengths": ["Water"]},
    {"name": "Grass", "immunes": [], "weaknesses": ["Fire", "Grass"], "strengths": ["Ground"]},
    {"name": "Ice", "immunes": [], "weaknesses": ["Fire", "Ice"], "strengths": ["Dragon"]},
    {"name": "Ground", "immunes": [], "weaknesses": ["Grass", "Ground"], "strengths": ["Electric"]},
    {"name": "Dragon", "immunes": [], "weaknesses": ["Ice", "Dragon"], "strengths": ["Dark"]},
    {"name": "Dark", "immunes": [], "weaknesses": ["Dragon", "Dark"], "strengths": ["Normal"]}]

    activeData=this.genVIData;

    createTypeNames() {
        let types = [];
        for (let i = 0; i < this.activeData.length;i++) {
            types.push(this.activeData[i].name);
        }
        return types;
    }

    createTypeIndices() {
        let typeIndices = {};
        for (let i = 0; i < this.activeData.length;i++) {
            typeIndices[this.activeData[i].name] = i;
        }
        return typeIndices;
    }

    createAttackDefenseLookup() {
        let attackDefenseTable = [];
        for (let a = 0; a < this.activeData.length; a++) {
            let currentRow = [];
            attackDefenseTable.push(currentRow);
            for (let d = 0; d < this.activeData.length; d++) {
                currentRow.push(1);
            }

            for (let i = 0; i < this.activeData[a].immunes.length; i++) {
                let d = this.typeIndices[this.activeData[a].immunes[i]];
                currentRow[d] = 0;
            }

            for (let s = 0; s < this.activeData[a].strengths.length; s++) {
                let d = this.typeIndices[this.activeData[a].strengths[s]];
                currentRow[d] = 2;
            }

            for (let w = 0; w < this.activeData[a].weaknesses.length; w++) {
                let d = this.typeIndices[this.activeData[a].weaknesses[w]];
                currentRow[d] = .5;
            }
        }
        return attackDefenseTable;
    }

    setData(data) {
        this.activeData = data;
        this.typeNames = this.createTypeNames();
        this.typeIndices = this.createTypeIndices();
        this.attackDefenseLookup = this.createAttackDefenseLookup();
        this.numTypes = this.activeData.length;
    }

    constructor() {
        this.setData(this.genVIData)
    }
}