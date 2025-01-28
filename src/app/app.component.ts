import { Component } from '@angular/core';
import { Invoice, InvoiceItem } from './invoice-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  invoice: Invoice = {
    invoiceNumber: 'LL93784',
    date: '01.07.2022',
    customerName: 'Customer Name',
    customerAddress: 'ABC, Anand nagar, Street Place',
    customerEmail: 'abc@gmail.com',
    companyName: 'DFE Ltd',
    companyAddress: 'DFL Street, India',
    companyEmail: 'demo@gmail.com',
    paymentInfo: 'Credit Card - 236************928',
    amount: 1732,
    tax: 82,
    products: [
      { Product: '1. Product name 1', price: 350, qty: 1, total: 350 },
      { Product: '2. Product name 2', price: 600, qty: 1, total: 600 },
      { Product: '3. Product name 3', price: 200, qty: 2, total: 400 },
      { Product: '4. Product name 4', price: 100, qty: 3, total: 300 }
    ]
  };

  printInvoice() {
    window.print();
  }
}
