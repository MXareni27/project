export class Book{
    _id?: number;
    title?: string;
    author?: string;
    editorial?: string;
    price?: number;
    image: string;

    constructor(title: string, author: string,editorial: string,price: number,image: string) {
        this.title = title;
        this.author = author;
        this.editorial = editorial;
        this.price = price;
        this.image = image;
    }
}