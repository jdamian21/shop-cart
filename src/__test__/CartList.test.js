import React from "react";
import { render } from "@testing-library/react";
import { ProductList } from "../components/ProductList";
import { CartList } from "../components/CartList";

it("render correctly", () => {
    const allProducts = [];
    const setAllProducts = jest.fn();
    const countProducts = 0;
    const setCountProducts = jest.fn();
    const total = 0;
    const setTotal = jest.fn();

    render( <
        ProductList allProducts = { allProducts }
        setAllProducts = { setAllProducts }
        countProducts = { countProducts }
        setCountProducts = { setCountProducts }
        total = { total }
        setTotal = { setTotal }
        />
    );
});

it("test_display_list_products", () => {
    const products = [{
            id: 1,
            urlImage: "https://example.com/image1.jpg",
            quantity: 2,
            nameProduct: "Product 1",
            price: 10,
        },
        {
            id: 2,
            urlImage: "https://example.com/image2.jpg",
            quantity: 1,
            nameProduct: "Product 2",
            price: 20,
        },
    ];
    const { getByText } = render( <
        CartList allProducts = { products }
        setAllProducts = {
            () => {}
        }
        total = { 0 }
        countProducts = { 0 }
        setCountProducts = {
            () => {}
        }
        setTotal = {
            () => {}
        }
        />
    );
    const product1Element = getByText(/Product 1/i);
    const product2Element = getByText(/Product 2/i);
    expect(product1Element).toBeInTheDocument();
    expect(product2Element).toBeInTheDocument();
});

it("test_display_total_price_and_wompi_button", () => {
    const { getByText } = render( <
        CartList allProducts = {
            [{
                id: 1,
                urlImage: "https://example.com/image1.jpg",
                quantity: 2,
                nameProduct: "Product 1",
                price: 10,
            }, ]
        }
        setAllProducts = {
            () => {}
        }
        total = { 20 }
        countProducts = { 2 }
        setCountProducts = {
            () => {}
        }
        setTotal = {
            () => {}
        }
        />
    );
    const totalElement = getByText(/Total:/i);
    const priceElement = getByText(/20/i);
    const wompiButtonElement = getByText(/Pagar con Wompi/i);
    expect(totalElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(wompiButtonElement).toBeInTheDocument();
});

it("should display an empty cart message when there are no products", () => {
    const { getByText } = render( <
        CartList allProducts = {
            []
        }
        setAllProducts = {
            () => {}
        }
        total = { 0 }
        countProducts = { 0 }
        setCountProducts = {
            () => {}
        }
        setTotal = {
            () => {}
        }
        />
    );

    const emptyCartMessage = getByText("El carrito está vacío");
    expect(emptyCartMessage).toBeInTheDocument();
});

it('test_renders_component_without_crashing', () => {
    const { getByText } = render( <
        CartList allProducts = {
            []
        }
        setAllProducts = {
            () => {}
        }
        total = { 0 }
        countProducts = { 0 }
        setCountProducts = {
            () => {}
        }
        setTotal = {
            () => {}
        }
        />
    );
    const titleElement = getByText(/Lista de productos/i);
    expect(titleElement).toBeInTheDocument();
});

it('test_display_list_of_products', () => {
    const allProducts = [{
            id: 1,
            urlImage: 'https://example.com/image1.jpg',
            quantity: 2,
            nameProduct: 'Product 1',
            price: 10,
        },
        {
            id: 2,
            urlImage: 'https://example.com/image2.jpg',
            quantity: 1,
            nameProduct: 'Product 2',
            price: 20,
        },
    ];
    const { getByText } = render( <
        CartList allProducts = { allProducts }
        setAllProducts = {
            () => {}
        }
        total = { 0 }
        countProducts = { 0 }
        setCountProducts = {
            () => {}
        }
        setTotal = {
            () => {}
        }
        />
    );
    const product1Element = getByText(/Product 1/i);
    const product2Element = getByText(/Product 2/i);
    expect(product1Element).toBeInTheDocument();
    expect(product2Element).toBeInTheDocument();
});