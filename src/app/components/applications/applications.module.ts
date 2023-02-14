export class application{
    public company: string;
    public level: string;
    public country: string;
    public amount: number;
    public tags: string;
    public time: string;
    public imagePath: string;

    constructor(company: string, level: string, country: string, amount: number, tags: string, time: string, imagePath: string){
        this.company = company;
        this.level = level;
        this.country = country;
        this.amount = amount;
        this.tags = tags;
        this.time = time;
        this.imagePath = imagePath;

    }
}