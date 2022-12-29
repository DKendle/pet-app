
class Pet{

    constructor(name, age, species){
        this.name = name,
        this.age = age,
        this.species = species
    }

    getPets(){
        fetch(base_url)
        .then(resp  => resp.json)
        then(pets => console.log(pets))
    }
    
}