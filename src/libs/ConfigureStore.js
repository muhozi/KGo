import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const ConfigureStore = () => {

    // create store...
    const middleware = [thunk/* ...your middleware (i.e. thunk) */];
    const store = compose(
      applyMiddleware(...middleware)
    )(createStore)(reducers);
    return store;
};

export default ConfigureStore;