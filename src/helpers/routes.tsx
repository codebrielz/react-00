import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const navRoutes = [
    {
        to: '/lazy1',
        name: 'Lazy1',
        path: "lazy1",
        element: (<LazyPage />)
    },
    {
        to: '/lazy2',
        name: 'Lazy2',
        path: "lazy2",
        element: (<LazyPage2 />)
    },
    {
        to: '/lazy3',
        name: 'Lazy3',
        path: "lazy3",
        element: (<LazyPage3 />)
    }
]