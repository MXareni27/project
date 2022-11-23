import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Book} from 'src/app/models/book'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listBooks: Book[] = [];
  constructor(private _productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this._productService.getBooks().subscribe(data => {
      console.log(data); 
      this.listBooks = data;
    }, error => {
      console.log(error);
    }
    );
  }

  deleteBook(id: any){
    this._productService.deleteBook(id).subscribe(data => {
      this.toastr.error('El libro se ha eliminado de forma correcta', 'Libro eliminado');
      this.getBooks();
    }, error => {
      console.log(error);
    }
    );
  }
}
