exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'SEUNG',
            age: 85,
            email: 'tjtmdrnjs1@gmail.com'
        })
    }
}