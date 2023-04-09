import ShoppingPage from "../02-components-patterns/pages/ShoppingPage";

export const navRoutes = [
    {
        to: '/shopping',
        name: 'Shopping',
        path: "shopping",
        Element: <ShoppingPage />
    },
    {
        to: '/about',
        name: 'About',
        path: "about",
        Element: (<h1>About</h1>)
    },
    {
        to: '/users',
        name: 'Users',
        path: "users",
        Element: (<h1>Users</h1>)
    }
]