const products = [
    {
    id: 1,
    descricao: 'Coca cola',
    valor: 10.00,
    qtde: 10
},
{
    id: 2,
    descricao: 'Cerveja',
    valor: 10.00, 
    qtde: 10
},
{
    id: 3,
    descricao: 'Agua',
    valor: 3.00,
    qtde: 10
},
{
    id: 4,
    descricao: 'Guardanapo',
    valor: 5.00,
    qtde: 10
}]


module.exports = { 
    async createCart(request, response) { 

        const {id, descricao, valor, qtde } = request.body

        const existsProducts = products.find(product => product.id === id)

        const { id, descricao, valor, qtde } = request












const product = {
    id,
    descricao,
    valor,
    qtde
}

products.push(product)

return response.json({ data: product })

},

async getListOfCart(request, response) {
    return response.json({ data: products })
},

async createUserCart(request, response) {

    const { products } = request.body

    for (const product of products) {
        const productExists = products.find(prd => prd.id === product.id)
        if (!productExists) {
            return response.status(400).json({
                error: 'Produto não encontrado'
            })
        } 
    }

if (product.qtde > productExists.qtde) {
    return response.status(400).json({
        error: 'Quantidade não disponivel'
    })
}


const userItens = {
    product: productExists.id,
    descricao: productExists.descricao,
    qtde: product.qtde,
    valor: product.qtde = productExists.valor

}

userCart.push(useritem)

const index = products.findIndes(idx => idx.id === product.id)
products[index].qtde = products[index].qtde - product.qtde

return response.json({
    order: userItens,
    stock: products
})






    console.log(product)

    return response.json({data: true })
}
}