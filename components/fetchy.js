export async function fetchy(url, method, postData, headers) {
    //console.log('url: ' + url) 
    //console.log('method: ' + method) 
    //console.log('postData: ' + JSON.stringify(postData)) 
    //console.log('headers: ' + JSON.stringify(headers))
    console.log('1')

    const res = await fetch(url, {
        method: method,
        body: JSON.stringify(postData),
        headers: headers,
        credentials: 'include'
    });
    if (!res.ok) {
        //console.log('2')
        const text = await res.text()
        throw new Error(text);
    } 
    console.log(...res.headers)
    return res.json()
}