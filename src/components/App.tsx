import React from 'react'
import { BrowserRouter, Route, RouteComponentProps, Switch } from 'react-router-dom'
import Routes from './config/Routes'

const App: React.FC<{}> = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                {Routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={(props: RouteComponentProps<any>) => (
                                <route.component
                                    {...props}
                                    {...route.props}
                                    meta={route.page.meta}
                                />
                            )}
                        />
                    )
                })}
            </Switch>
        </BrowserRouter>
    )
}

export default App
