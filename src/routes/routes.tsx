import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    name: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const LazyLayout = lazy(()=> import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/*',
        name: 'LazyLayout - Dash',
        Component: LazyLayout
    },
    {
        to: '/no-lazy',
        name: 'no-lazy',
        path: "no-lazy",
        Component: NoLazy
    }
]