
const Prods = (id,name,size,category,price) =>{
    return {id,name,size,category,price}
}

const orders = (id,products_id,total) =>{
    return {id,products_id,total}
}

const categoryarray= (id,category) =>{
    return {id,category }
}

export { Prods, orders, categoryarray };
