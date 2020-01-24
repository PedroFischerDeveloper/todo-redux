import React from 'react';

import { Provider } from 'react-redux'; // responsável por escutar 


import store from './store';
import  TodoList  from './TodoList';


function App() {
  return (
    <Provider store={store}>
        <TodoList />
    </Provider>
  );
}

export default App;
