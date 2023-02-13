export class NewDocType {

    id: string;
    name: string
    state: boolean;


    constructor(id: string, name: string, state: boolean) {
        this.id = id;
        this.name = name;
        this.state = state;
    }

    getData(): { id: string; name: string; state: boolean } {
        return {

            id: this.id,
            name: this.name,
            state: this.state

        };
    }



}