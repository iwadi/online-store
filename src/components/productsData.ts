import { Product } from "../components/types/types";
import { Products } from '../components/ProductList/ProductList';

export function generateUniqueSKU(existingSKUs: string[] = []): string {
    const fixedPart = "99575187";
    let sku: string;

    do {
        const randomPart = Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
        sku = `1${fixedPart}${randomPart}`;
    } while (existingSKUs.includes(sku));

    return sku;
}

export const products: Product[] = Products.map(product => ({
    ...product,
    sku: generateUniqueSKU(Products.map(p => p.id.toString()))
}));