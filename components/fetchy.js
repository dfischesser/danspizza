export async function fetchy(url, login) {

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json()

}