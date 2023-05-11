const products = [
    {
        id: '1',
        name: 'Auto toyota',
        img: '/images/toyota-corolla.png', 
        price: 10000,  
        category: 'Auto', 
        stock: 5, 
        description: 'description de toyota corolla'},
    {
        id: '2', 
        name: 'Auto mazda',
        img: '/images/mazda-3.png', 
        price: 60000,  
        category: 'Auto', 
        stock: 10, 
        description: 'description de mazda-3'},
    {
        id: '3', 
        name: 'Auto bmw-3 Series',
        img: '/images/bmw-3-series.png', 
        price: 80000,  
        category: 'Auto', 
        stock: 5, 
        description: 'description de bmw-3-series'},
    {
        id: '4', 
        name: 'Auto audi A4', 
        img: '/images/audi-a4.png', 
        price: 90000,  
        category: 'Auto', 
        stock: 5, 
        description: 'description de audi-a4'},


    {id: '5', name: 'Camioneta Chevrolet Suv',img: '/images/chevrolet-suv.png',price: 90000,  category: 'Camioneta', stock: 5, description: 'description de chevrolet-suv'},
    {id: '6', name: 'Camioneta Nissan Frontier',img: '/images/nissan-frontier.png',price: 77000,  category: 'Camioneta', stock: 5, description: 'description de nissan-frontier'},
    {id: '7', name: 'Camioneta Renault Oroch',img: '/images/renault-oroch.png', price: 80000,  category: 'Camioneta', stock: 5, description: 'description de renault-oroch'},
    {id: '8', name: 'Camioneta Toyota Sw4',img: '/images/toyota-sw4.png', price: 30000,  category: 'Camioneta', stock: 5, description: 'description de toyota-sw4'},

    
    {id: '9', name: 'Moto Kawasaki Z4000',img: '/images/kawasaki-z4000.jpg', price: 5000,  category: 'Moto', stock: 5, description: 'description de kawasaki-z4000'},
    {id: '10', name: 'Moto Motomel Skua 250',img: '/images/motomel-skua-250.jpg', price: 6000,  category: 'Moto', stock: 5, description: 'description de motomel-skua-250'},
    {id: '11', name: 'Moto Honda Xr 150',img: '/images/honda-xr-150.jpg', price: 9000,  category: 'Moto', stock: 5, description: 'description de honda-xr-150'},
    {id: '12', name: 'Moto Ktm 390 Duke',img: '/images/ktm-390-duke.jpg', price: 10000,  category: 'Moto' , stock: 5, description: 'description de ktm-390-duke'},

]

export const getProducts =() => {
    return  new Promise((resolve) => {
        setTimeout (() =>{
            resolve(products)
        }, 800)
    })
}




export const getProductById = (productId) =>  {

        return new Promise ((resolve) => {
            setTimeout (() => {
                resolve (products.find(prod  => prod.id === productId))
            },500)
        })

}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },400)
    })

}