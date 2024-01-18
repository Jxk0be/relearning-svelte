export async function load({ params }) {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    const products = data.products;
    
	return {
        items: products
	};
}