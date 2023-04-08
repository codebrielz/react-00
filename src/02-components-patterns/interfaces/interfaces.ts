import React, { ReactElement } from 'react'

export interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    product: Product;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value:number) => void;
    product: Product
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: {title?: string | undefined }) => JSX.Element;
    Image: ({ image }: {image?: string | undefined }) => JSX.Element;
    Buttons: () => JSX.Element;
}