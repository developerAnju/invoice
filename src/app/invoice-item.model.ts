export interface InvoiceItem {
    Product: string;
    price: number;
    qty: number;
    total: number;
  }
  
  export interface Invoice {
    invoiceNumber: string;
    date: string;
    customerName: string;
    customerAddress: string;
    customerEmail: string;
    companyName: string;
    companyAddress: string;
    companyEmail: string;
    paymentInfo: string;
    amount: number;
    products: InvoiceItem[];
    tax: number;
  }
  