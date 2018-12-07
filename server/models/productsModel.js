
const Prods = (id,name,size,category,price,image,Quantity) =>{
    return {id,name,size,category,price,image,Quantity}
}

const orders = (id,products_id,attendantid,total) =>{
    return {id,products_id,attendantid,total}
}

const categoryArray = (id,category) =>{
    return {id,category }
}

export { Prods, orders, categoryArray };
