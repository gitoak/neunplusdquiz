import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './redux/store/redux.store.configureStore'
import './styles/index.sass'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
