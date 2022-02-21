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

  //ตัวแปรกำหนดค่าบนฟอร์มเพิ่มสินค้า
  dataProductAdd = {
    "productName":"",
    "price":"",
    "quantity":"",
    "picture":"",
    "categoryName":""
  }

  //เก็บรายการสินค้าตามไอดี
  dataProductById = {
    "productName":"",
    "price":"",
    "quantity":"",
    "picture":"",
    "categoryName":""
  }

  //เก็บข้อมูลสำหรับแก้ไข
  dataProductEdit = {
    "productId" : "",
    "productName":"",
    "price":"",
    "quantity":"",
    "picture":"",
    "categoryName":""
  }

  constructor(public api : ProductService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data: {}) => {
      this.dataProduct = data
    })
  }
  //ฟังชั่นเพิ่มรายการสินค้า
  submitAddProduct(){
    this.api.createProduct(this.dataProductAdd).subscribe((data: {}) => {
      alert("Save Product Complete")
    })
  }
  //ฟังชั่นแก้ไขสินค้า
  submitEditProduct(){
    
  }

  //ฟังชั่นสำหรับการลบข้อมูล
  deleteProduct(){
    alert("ลบข้อมูล")
  }

}
