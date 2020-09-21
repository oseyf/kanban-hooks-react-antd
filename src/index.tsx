import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BoardProvider } from './board-context/context';
import { ItemProvider } from './item-context/context';

ReactDOM.render(
    <BoardProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </BoardProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
