import { lazy, LazyExoticComponent } from "react";
// import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    name: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const Lazy1 = lazy(()=> import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage'))
const Lazy2 = lazy(()=> import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(()=> import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        to: '/lazy1',
        name: 'Lazy1',
        path: "lazy1",
        Component: Lazy1
    },
    {
        to: '/lazy2',
        name: 'Lazy2',
        path: "lazy2",
        Component: Lazy2
    },
    {
        to: '/lazy3',
        name: 'Lazy3',
        path: "lazy3",
        Component: Lazy3
    }
]