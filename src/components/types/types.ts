export type Product = {
    id: number;
    name: string;
    price: number;
    img: string;
    sku?: string;
    categories: string[];
    size?: 'Маленький' | 'Большой'| 'Средний';
};

export type CartItem = {
    product: Product;
    quantity: number;
};

export type Category = {
    name: string;
    count: number;
}