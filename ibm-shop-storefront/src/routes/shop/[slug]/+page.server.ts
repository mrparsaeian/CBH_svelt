export const prerender = true;
import { API_HOST } from '$env/static/private';

export async function load({ params }) {
    console.log(params.slug);
    const res = await fetch(`${API_HOST}/api/items/${params.slug}?populate=*`);
    const item = await res.json();
    item.API_HOST = API_HOST;
    return item;
}