class PokeData {
    githubData=[{"name":"Normal","immunes":["Ghost"],"weaknesses":["Rock","Steel"],"strengths":[]},
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

    createTypeNames() {
        let types = [];
        for (let i = 0; i < this.githubData.length;i++) {
            types.push(this.githubData[i].name);
        }
        return types;
    }
    
    createTypeIndices() {
        let typeIndices = {};
        for (let i = 0; i < this.githubData.length;i++) {
            typeIndices[this.githubData[i].name] = i;
        }
        return typeIndices;
    }
    
    createAttackDefenseLookup() {
        let attackDefenseTable = [];
        for (let a = 0; a < this.githubData.length; a++) {
            let currentRow = [];
            attackDefenseTable.push(currentRow);
            for (let d = 0; d < this.githubData.length; d++) {
                currentRow.push(1);
            }
    
            for (let i = 0; i < this.githubData[a].immunes.length; i++) {
                let d = this.typeIndices[this.githubData[a].immunes[i]];
                currentRow[d] = 0;
            }
    
            for (let s = 0; s < this.githubData[a].strengths.length; s++) {
                let d = this.typeIndices[this.githubData[a].strengths[s]];
                currentRow[d] = 2;
            }
    
            for (let w = 0; w < this.githubData[a].weaknesses.length; w++) {
                let d = this.typeIndices[this.githubData[a].weaknesses[w]];
                currentRow[d] = .5;
            }
        }
        return attackDefenseTable;
    }
    
    constructor() {
        this.typeNames = this.createTypeNames();
        this.typeIndices = this.createTypeIndices();
        this.attackDefenseLookup = this.createAttackDefenseLookup();
        this.numTypes = this.githubData.length;
    }
}