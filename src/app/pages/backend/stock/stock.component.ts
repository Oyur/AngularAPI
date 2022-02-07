import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  //สร้างตัวแปรรับค่า api
  dataProduct: any = []

  constructor(public api : ProductService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data: {}) => {
      this.dataProduct = data
    })
  }

}
