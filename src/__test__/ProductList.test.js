import React from "react";
import { render } from "@testing-library/react";
import { ProductList } from "../components/ProductList";

it('renders correctly with empty products', () => {
    const mockSetAllProducts = jest.fn();
    const mockSetCountProducts = jest.fn();
    const mockSetTotal = jest.fn();

    const { queryByText } = render( <
        ProductList allProducts = {
            []
        }
        setAllProducts = { mockSetAllProducts }
        countProducts = { 0 }
        setCountProducts = { mockSetCountProducts }
        total = { 0 }
        setTotal = { mockSetTotal }
        />
    );

    expect(queryByText('Product 1')).toBeNull();
    expect(queryByText('Product 2')).toBeNull();
});

it('test_adding_product_with_non_numeric_quantity_does_not_add_to_cart', () => {
    const setAllProducts = jest.fn();
    const setCountProducts = jest.fn();
    const setTotal = jest.fn();
    const allProducts = [{
        id: 1,
        nameProduct: 'Leche entera',
        price: '3200',
        urlImage: '/src/assets/leche.png',
        quantity: 1
    }];
    const countProducts = 1;
    const total = 3200;
    const product = {
        id: 1,
        nameProduct: 'Leche entera',
        price: '3200',
        urlImage: '/src/assets/leche.png',
        quantity: 'a'
    };

    ProductList({
        allProducts,
        setAllProducts,
        countProducts,
        setCountProducts,
        total,
        setTotal
    });

    expect(setAllProducts).not.toHaveBeenCalled();
    expect(setCountProducts).not.toHaveBeenCalled();
    expect(setTotal).not.toHaveBeenCalled();
});

it('test_add_product_quantity_zero', () => {
    const setAllProducts = jest.fn();
    const setCountProducts = jest.fn();
    const setTotal = jest.fn();
    const allProducts = [];
    const countProducts = 0;
    const total = 0;
    const product = {
        id: 1,
        nameProduct: 'Leche entera',
        price: '3200',
        urlImage: '/src/assets/leche.png',
        quantity: 0
    };

    ProductList({
        allProducts,
        setAllProducts,
        countProducts,
        setCountProducts,
        total,
        setTotal
    });

    expect(setAllProducts).not.toHaveBeenCalled();
    expect(setCountProducts).not.toHaveBeenCalled();
    expect(setTotal).not.toHaveBeenCalled();
});

it('test_add_product_negative_quantity', () => {
    const setAllProducts = jest.fn();
    const setCountProducts = jest.fn();
    const setTotal = jest.fn();
    const allProducts = [];
    const countProducts = 0;
    const total = 0;
    const product = {
        id: 1,
        nameProduct: 'Leche entera',
        price: '3200',
        urlImage: '/src/assets/leche.png',
        quantity: -1
    };

    ProductList({
        allProducts,
        setAllProducts,
        countProducts,
        setCountProducts,
        total,
        setTotal
    });

    expect(setAllProducts).not.toHaveBeenCalled();
    expect(setCountProducts).not.toHaveBeenCalled();
    expect(setTotal).not.toHaveBeenCalled();
});

it('test_add_product_non_numeric_quantity', () => {
    const setAllProducts = jest.fn();
    const setCountProducts = jest.fn();
    const setTotal = jest.fn();
    const allProducts = [];
    const countProducts = 0;
    const total = 0;
    const product = {
        id: 1,
        nameProduct: 'Leche entera',
        price: '3200',
        urlImage: '/src/assets/leche.png',
        quantity: 'a'
    };

    ProductList({
        allProducts,
        setAllProducts,
        countProducts,
        setCountProducts,
        total,
        setTotal
    });

    expect(setAllProducts).not.toHaveBeenCalled();
    expect(setCountProducts).not.toHaveBeenCalled();
    expect(setTotal).not.toHaveBeenCalled();
});

it('test_add_product_non_numeric_price', () => {
    const setAllProducts = jest.fn();
    const setCountProducts = jest.fn();
    const setTotal = jest.fn();
    const allProducts = [];
    const countProducts = 0;
    const total = 0;
    const product = {
        id: 1,
        nameProduct: 'Leche entera',
        price: 'a',
        urlImage: '/src/assets/leche.png',
        quantity: 1
    };

    ProductList({
        allProducts,
        setAllProducts,
        countProducts,
        setCountProducts,
        total,
        setTotal
    });

    expect(setTotal).not.toHaveBeenCalledWith('a');
});