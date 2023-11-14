export const prerender = true;
import { API_HOST } from '$env/static/private';

export async function load({ fetch }: any) {
    const res = await fetch(`${API_HOST}/api/items?populate=*`);
    const data = await res.json();
    data.API_HOST = API_HOST;
    return data;
}