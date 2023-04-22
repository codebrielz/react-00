import React, { createContext, ReactElement, CSSProperties } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: (args : onChangeArgs) => void;
}

export const ProductCard = ({ children, product, className, style, onChange }: Props) => {

    const { increaseBy, counter } = useProduct({ onChange, product })

    return (
        <Provider value={{
            counter, increaseBy, product
        }}>
            <div style={style} className={`${ styles.productCard } ${ className }`} >
                {children}
            </div>
        </Provider>
    )
}