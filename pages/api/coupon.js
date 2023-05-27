// pages/api/user

//http://192.168.86.31:5753/Coupon/Get
//https://supernatural-quotes-api.cyclic.app/quotes/random
export async function getData() {
    const response = await fetch('http://localhost/api/Coupon/Get')
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req, res) {
    const jsonData = await getData()
    res.status(200).json(jsonData)
}