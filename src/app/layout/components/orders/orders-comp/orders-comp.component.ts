import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrderModel } from '../../../../models/order.model';
import { OrderService } from '../../../../services/OrderService';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orders-comp',
  templateUrl: './orders-comp.component.html',
  styleUrls: ['./orders-comp.component.css']
})
export class OrdersCompComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  orders$: Observable<OrderModel[]> | undefined;
  dataSource: MatTableDataSource<OrderModel> = new MatTableDataSource<OrderModel>([]);

  displayedColumns: string[] = ['productName', 'price', 'quantity', 'createdAt'];

  ngOnInit(): void {
    this.orders$ = this.orderService._getAllOrders().pipe(
      map(orders => {
        // Flatten the structure
        const flattenedData: any[] = [];
        orders.forEach(order => {
          order.orderedProducts.forEach(product => {
            flattenedData.push({
              orderId: order.id,
              productName: product.product.name,
              price: product.product.price,
              quantity: product.product.quantity,
              createdAt: order.createdAt
            });
          });
        });
        return flattenedData;
      })
    );

    // Subscribe to the orders$ Observable and update dataSource when data is received
    this.orders$.subscribe(data => {
      // Create a MatTableDataSource with the flattened data
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource.data);
    });
  }
}
