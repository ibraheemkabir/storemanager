
const Prods = (id,name,size,category,price) =>{
    id:Number;
    name:String;
    size:Number;
    category:String;
    price:Number;

    return {id,name,size,category,price}
}

const orders = (id,products_id,total) =>{
    id:Number;
    products_id:String;
    total:Number;
    return {id,products_id,total}
}

const category = (id,category) =>{
    id:Number;
    category:String;
    return {id,category}
}

export { Prods, orders, category };
