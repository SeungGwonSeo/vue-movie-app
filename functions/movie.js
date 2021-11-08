const axios = require('axios') // node.js 환경에서는 import 대신 require로 패키지를 불러옴!
const { OMDB_API_KEY } = process.env

exports.handler = async function (event) {
    console.log(event)
    const payload = JSON.parse(event.body)
    const { title, type, year, page, id } = payload
    const url = id 
        ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` 
        : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

    try {
        const { data } = await axios.get(url)
        if (data.Error) {
            return {
                statusCode: 400,
                body: data.Error
            }
        }
        return {
            statusCode: 200,
            body : JSON.stringify(data)
        }
    } catch (error) {
        return {
            statusCode: error.response.status,
            body: error.message
        }
    }

}