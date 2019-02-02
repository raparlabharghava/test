import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addItemAction, removeItemAction, updateItemAction } from './actions/ItemActions.js';


test('test item add action generator', () => {
  const addAction = { type: 'addItem', item: { id: 101, name: 'laptop'} };
  expect(addItemAction({ id: 101, name: 'laptop'})).toEqual(addAction);
});

test('test remove item action generator', () => {
  const removeAction = { type: 'removeItem', item: { id: 101 } };
  expect(removeItemAction({ id: 101})).toEqual(removeAction);
});

test('test item update action generator', () => {
  const addAction = { type: 'updateItem', item: { id: 101, name: 'Desktop'} };
  expect(updateItemAction({ id: 101, name: 'Desktop'})).toEqual(addAction);
});
