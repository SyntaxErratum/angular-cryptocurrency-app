// This model is based off of the data being provided by worldcoinindex.com
export class Currency {
    public label: string;
    public name: string;
    public price: number;
    public volume: number;
    public timestamp: number;
    constructor(Label, Name, Price, Volume_24h, Timestamp) {
        this.label = Label;
        this.name = Name;
        this.price = Price;
        this.volume = Volume_24h;
        this.timestamp = Timestamp;
    }
}
