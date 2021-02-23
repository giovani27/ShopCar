const jwt  = require("jsonwebtoken")

const db = [{username: 'Admin' , password: 'Admin'}]

const authenticate = async ({username, password}) => {
    const user = db.find(user => user.password === password && user.username === username)

    if(user){
        const token = await jwt.sign({username}, 'secret')
        return {
            token,
            user
        }
    }
      
}

module.exports = {
    authenticate
}