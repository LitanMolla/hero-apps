import React from 'react'
import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root/Root';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import AppsDetails from '../pages/AppsDetails/AppsDetails';
import Installation from '../pages/Installation/Installation';

const Router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'apps',
                Component: Apps
            },
            {
                path:'app-details/:id',
                Component: AppsDetails
            },
            {
                path:'installation',
                Component: Installation
            }
        ]
    }
])

export default Router;