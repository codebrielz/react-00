import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface Route {
    to: string,
    name: string,
    path: string,
    Component: () => JSX.Element
}

export const routes: Route[] = [
    {
        to: '/lazy1',
        name: 'Lazy1',
        path: "lazy1",
        Component: LazyPage
    },
    {
        to: '/lazy2',
        name: 'Lazy2',
        path: "lazy2",
        Component: LazyPage2
    },
    {
        to: '/lazy3',
        name: 'Lazy3',
        path: "lazy3",
        Component: LazyPage3
    }
]