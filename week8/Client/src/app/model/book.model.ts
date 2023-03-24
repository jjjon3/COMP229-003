export class Book {
    id: any;
    //id: any;
    constructor(
        public _id: number,
        public name?: string,
        public author?: string,
        public published?: string,
        public description?: string,
        public price?: number
    ) {}
}