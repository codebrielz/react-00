import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({image = ''}) => {
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
        <img className={styles.productImg} src={imgToShow} alt="Product Image" />
    )
}