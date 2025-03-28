interface ProductCard {
    image: string;
    title: string;
    description: string;
    price: number;
    button: () => void;
}

const products: ProductCard[] = [
    {
        image: 'ejemplo1.jpg',
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        price: 100,
        button: () => {
            console.log('Producto 1 button clicked!');
        }
    },
    {
        image: 'ejemplo2.jpg',
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 200,
        button: () => {
            console.log('Producto 2 button clicked!');
        }
    },
    {
        image: 'ejemplo3.jpg',
        title: 'Producto 3',
        description: 'Descripción del producto 3',
        price: 300,
        button: () => {
            console.log('Producto 3 button clicked!');
        }
    }
];

export default products;
