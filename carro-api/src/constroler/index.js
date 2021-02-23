const Car = require('../models/car')

class carcontroller {
     constructor(dao){
          this.dao = dao
     }

      index = async  (req,res) => {
          const car = await this.dao.find()
          return res.json(car)
     }
     create = async(req, res) => {
          const car = await this.dao.create(req.body)
          return res.status(201).json(car)

     }

}

module.exports = new carcontroller(Car)