export async function fetchy(url, method, postData, headers) {
    console.log('url: ' + url) 
    console.log('method: ' + method) 
    console.log('postData: ' + JSON.stringify(postData)) 
    console.log('headers: ' + JSON.stringify(headers) )
    const res = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(postData)
    });
    if (!res.ok) {
        const text = await res.text()
        throw new Error(text);
    } 
    return res.json()
}