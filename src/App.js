import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { BrowserRouter} from 'react-router-dom'
import { createStore, compose, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import createReducer from "./store/reducers";
import Routes from './routes';

const jss = create({
	...jssPreset(),
	plugins: [...jssPreset().plugins, jssExtend(), rtl()],
	insertionPoint: document.getElementById('jss-insertion-point')
});

const generateClassName = createGenerateClassName();

//For Redux Dev Tools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(createReducer(), composeEnhancers(applyMiddleware(thunk)));

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
	if ( store.asyncReducers[key] )
	{
		return;
	}
	store.asyncReducers[key] = reducer;
	store.replaceReducer(createReducer(store.asyncReducers));
	return store;
};

const App = () => {
	return (
			<StylesProvider jss={jss} generateClassName={generateClassName}>
				<Provider store={store}>
					<BrowserRouter>
						<Routes/>
					</BrowserRouter>
				</Provider>
			</StylesProvider>
	);
};

export default App;
