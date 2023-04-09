import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: "Coffee Mug - Card",
    img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard product={ product } className="bg-dark text-white" >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title="Primer titulo" className="text-bold" />
                    <ProductCard.Buttons style={{ display:'flex', justifyContent:'center'}} className="custom-buttons" />
                </ProductCard>

                <ProductCard product={ product } className="bg-dark text-white" >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons style={{ display:'flex', justifyContent:'center'}} className="custom-buttons" />
                </ProductCard>
            </div>

        </div>
    )
}

export default ShoppingPage