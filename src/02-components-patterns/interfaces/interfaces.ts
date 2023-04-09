import React, { ReactElement } from 'react'
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as TitleProps } from '../components/ProductTitle';
import { Props as ImageProps } from '../components/ProductImage';
import { Props as ButtonsProps } from '../components/ProductButtons';

export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value:number) => void;
    product: Product
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Buttons: ({className}: ButtonsProps) => JSX.Element;
    Image: ({ image, className }: ImageProps) => JSX.Element;
    Title: ({ title, className }: TitleProps) => JSX.Element;
}