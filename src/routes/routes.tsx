import ShoppingPage from "../02-components-patterns/pages/ShoppingPage";

export const navRoutes = [
    {
        to: '/shopping',
        name: 'Shopping',
        path: "shopping",
        element: (<ShoppingPage />)
    },
    {
        to: '/about',
        name: 'About',
        path: "about",
        element: (<h1>About</h1>)
    },
    {
        to: '/users',
        name: 'Users',
        path: "users",
        element: (<h1>Users</h1>)
    }
]