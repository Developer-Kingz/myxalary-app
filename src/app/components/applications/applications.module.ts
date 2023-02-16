export class application{
    public id: number;
    public company: string;
    public level: string;
    public country: string;
    public amount: number;
    public tags: string;
    public time: string;
    public imagePath: string;

    constructor(id: number, company: string, level: string, country: string, amount: number, tags: string, time: string, imagePath: string){
        this.id = id;
        this.company = company;
        this.level = level;
        this.country = country;
        this.amount = amount;
        this.tags = tags;
        this.time = time;
        this.imagePath = imagePath;

    }
}