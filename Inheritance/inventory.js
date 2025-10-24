class inventory
{
    constructor(item_name,qty,price)
    {
this.item_name=item_name;
this.qty=qty;
this.price=price;
    }
}

let item=new inventory("Laptop",2,1500)
console.log(`inventory details item_name: ${item.item_name} Quantity: ${item.qty} Price:$ ${item.price}`)