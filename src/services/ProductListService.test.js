import React from 'react';
import ReactDOM from 'react-dom';
import { getProductsFromIds } from './ProductListService';

const product1 = { id: 111, title: 'test product one' };
const product2 = { id: 222, title: 'test product two' };
const productsData = [ product1, product2 ];

it('can return product info from ids array', () => {
  const out = getProductsFromIds([ 111 ], productsData);
  expect(out).toMatchObject([ product1 ]);
});

it('can return two products from ids', () => {
  const out = getProductsFromIds([ 111, 222 ], productsData);
  expect(out).toMatchObject([ product1, product2 ]);
});
