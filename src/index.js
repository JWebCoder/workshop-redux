// App Styles
import './sass/index.scss';

// React
import React from 'react';
import {render} from 'react-dom';

// Router
import {HashRouter as Router} from 'react-router-dom';

// Redux
import {Provider} from 'react-redux';
import configureStore from 'app/store/configureStore';

// Layout
import Layout from 'app/components/Layout';

const store = configureStore();

render((
  <Provider store={store}>
    <Router>
      <Layout/>
    </Router>
  </Provider>
),
  document.getElementById('app')
);
