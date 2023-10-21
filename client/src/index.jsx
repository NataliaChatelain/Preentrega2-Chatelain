import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './components/Context/CartContext';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<CartProvider>
				<App />
			</CartProvider>
		</BrowserRouter>
	</React.StrictMode>
);