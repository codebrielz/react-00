import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';
import React from 'react';

const product1 = {
    id: '1',
    title: "Coffee Mug - Card",
    img: "./coffee-mug.png"
}

const product2 = {
    id: '2',
    title: "Coffee Mug - Meme",
    img: "./coffee-mug2.png"
}

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
    count: number
}

export const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = React.useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({count, producto}: {count: number, producto: Product}) => {
        console.log(count, producto);
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onChange={(evento) => onProductCountChange(evento)}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons style={{ display: 'flex', justifyContent: 'center' }} className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
            <div className='shopping-cart'>
                <ProductCard product={product1} className="bg-dark text-white" style={{ width: '100px' }} >
                    <ProductImage className="custom-image" />
                    <ProductButtons style={{ display: 'flex', justifyContent: 'center' }} className="custom-buttons" />
                </ProductCard>
                <ProductCard product={product2} className="bg-dark text-white" style={{ width: '100px' }} >
                    <ProductImage className="custom-image" />
                    <ProductButtons style={{ display: 'flex', justifyContent: 'center' }} className="custom-buttons" />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage