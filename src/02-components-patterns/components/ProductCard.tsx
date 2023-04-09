import React, { createContext, ReactElement } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
}

export const ProductCard = ({ children, product, className }: Props) => {

    const { increaseBy, counter } = useProduct()

    return (
        <Provider value={{
            counter, increaseBy, product
        }}>
            <div className={`${ styles.productCard } ${ className }`} >
                {children}
            </div>
        </Provider>
    )
}