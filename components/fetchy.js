export async function fetchy(url, postData, headers) {
    const res = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(postData)
    });
    if (!res.ok) {
        const text = await res.text()
        throw new Error(text);
    } 
    return res.json()
}