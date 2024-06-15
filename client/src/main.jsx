import React from 'react'
import ReactDOM from 'react-dom/client.js'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Router>
        <ThirdwebProvider chainId={ChainId.Sepolia}>
            <App />
        </ThirdwebProvider>
    </Router>
)