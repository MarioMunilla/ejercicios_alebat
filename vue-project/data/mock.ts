interface ProductCard {
    image: string;
    title: string;
    description: string;
    price: number;
    button: () => void;
}

const products: ProductCard[] = [
    {
        image: '/img/image1.png',
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        price: 100,
        button: () => {
            console.log('Producto 1 clicado!');
        }
    },
    {
        image: 'ejemplo2.jpg',
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 200,
        button: () => {
            console.log('Producto 2 clicado!');
        }
    },
    {
        image: 'ejemplo3.jpg',
        title: 'Producto 3',
        description: 'Descripción del producto 3',
        price: 300,
        button: () => {
            console.log('Producto 3 clicado!');
        }
    }
];

export default products;
