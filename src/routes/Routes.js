import React from 'react'

import Login from '../pages/Login'
import Tail from '../pages/Tail'
import CreateTicket from '../pages/CreateTicket'
import Desktop from '../pages/Desktop'


import { Redirect, Route, Switch } from 'react-router-dom'

const routes = [
    {
        path: '/ingresar',
        exact: true, 
        component: Login
    },
    {
        path: '/cola',
        exact: true, 
        component: Tail
    },
    {
        path: '/crear',
        exact: true, 
        component: CreateTicket
    },
    {
        path: '/escritorio',
        exact: true, 
        component: Desktop 
    },
]


export default function Routes() {
    return (
        <Switch>
            {
                routes.map( ( { path, exact, component }, index ) => (
                    <Route 
                        key = { index }
                        path = { path }
                        exact = { exact }
                        component = { component }
                    />
                ) )
            }
            <Redirect to='/ingresar' />
        </Switch>
    )
}
