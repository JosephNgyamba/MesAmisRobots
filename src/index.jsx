import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Title} from './App'
import {Input} from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <Title />
     <Input/>
		<App />
	</React.StrictMode>
)