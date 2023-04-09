import React, { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
    className?: string
    image?: string,
    style?: CSSProperties
}

export const ProductImage = ({image, className, style}: Props) => {
    const {product:{img}} = useContext(ProductContext);
    let imgToShow: string;
    if(image){
        imgToShow = image;
    } else if(img) { 
        imgToShow = img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product Image" />
    )
}