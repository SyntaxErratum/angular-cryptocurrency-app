// This model is based off of the data being provided by worldcoinindex.com
export class Currency {
    public label: string;
    public name: string;
    public price: number;
    public volume: number;
    public timestamp: number;
    constructor(item) {
        this.label = item.Label;
        this.name = item.Name;
        this.price = item.Price;
        this.volume = item.Volume_24h;
        this.timestamp = item.Timestamp;
    }
}
