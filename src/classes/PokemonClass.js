export default class Pokemon { // class for pokemon data
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.sprite = this.sprite = data.sprites.front_default;
        this.type = data.types[0].type.name;
    }
}