import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store';
import { Switch , BrowserRouter , HashRouter } from 'react-router-dom';
import Routers from './Routers';

console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Switch>
				<Routers />
			</Switch>
		</HashRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
