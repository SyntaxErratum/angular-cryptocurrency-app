export class Currency {
    public label: string;
    public name: string;
    public price: number;
    public volume: number;
    public timestamp: number;
    constructor(item: {Label, Name, Price, Volume_24h, Timestamp}) {
        this.label = item.Label;
        this.name = item.Name;
        this.price = item.Price;
        this.volume = item.Volume_24h;
        this.timestamp = item.Timestamp;
    }
}
