export class Book{
    _id?: number;
    title?: string;
    author?: string;
    editorial?: string;
    price?: number;

    constructor(title: string, author: string,editorial: string,price: number){
        this.title = title;
        this.author = author;
        this.editorial = editorial;
        this.price = price;
    }
}