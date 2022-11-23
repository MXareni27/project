import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  titleScreen = 'Añadir libro';
  id: string | null;

  constructor(private fb: FormBuilder,private router:Router, 
              private toastr: ToastrService, private _bookService: ProductService,
              private routerAct: ActivatedRoute)  {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      editorial: ['', Validators.required],
      price: ['', Validators.required],
    })
    this.id = this.routerAct.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.edit();
  }

  addBook(){
    const BOOK: Book ={
      title: this.productForm.get('title')?.value,
      author: this.productForm.get('author')?.value,
      editorial: this.productForm.get('editorial')?.value,
      price: this.productForm.get('price')?.value,
    }

    if(this.id != null){
      //editar libro
      this._bookService.updateBook(this.id, BOOK).subscribe(data => {
        this.toastr.info('El libro ha sido actualizado de forma correcta', 'Libro actualizado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productForm.reset();
      });
    }else{
      //crear libro
      console.log(BOOK);
      this._bookService.createBook(BOOK).subscribe(data=>{
        this.toastr.success('El libro ha sido registrado de forma correcta', 'Libro registrado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productForm.reset();
      });
    }
    
  }
    edit(){
      if(this.id  != null){
        this.titleScreen = 'Editar libro';
        this._bookService.getBook(this.id).subscribe(data =>{
          this.productForm.setValue({
            title: data.title,
            author: data.author,
            editorial: data.editorial,
            price: data.price,
          });
        });
      }
    };
  

}
