const Car = require('./carModel')

// get all cars
getAllItems = (req, res) => {
    Car.find({}, (items, error) => {
        if(error) return res.json(error)

        res.json(items)
    })
}

// save car
saveObject = async(req, res) => {
    let car = new Car(req.body)

    try {
        let createdCar = await car.save()
        res.json(createdCar)
    } catch(e) {
        res.status(400).json(e)
    }
}

// get car by id
getObjectById = async (req, res) => {
    try {
        let car = await Car.findById({_id: req.body._id})
        if(!car) throw "Car doesn't exist"
        res.json(car)
    } catch(e) {
        res.status(401).json(e)
    }
}

// delete the car by id
deleteCar = async (req, res) => {
    try {
        let deletedCar = await Car.deleteOne({_id: req.body._id})
        if(!car) throw "Car doesn't exist"
        res.json(`Deleted: ${deletedCar}`)
    } catch(e) {
        res.status(401).json(e)
    }
}

// update information about car
updateObject = async(req, res) => {
   let upadatedCar =  await Car.findOneAndUpdate({_id: req.body._id}, req.body, {new: true})
    res.json(upadatedCar)
}

// filter for (rida, metai, pavaru deze)
filter = async (req, res) => {
    let ridaNuo = req.body.ridaNuo
    let ridaIki = req.body.ridaIki
    let metaiNuo = req.body.metaiNuo
    let metaiIki = req.body.metaiIki
    let pavaruDeze = req.body.pavaruDeze

    // filtruoti pagal rida
    if(ridaNuo) {
        let car = await Car.find({rida: { $gte: ridaNuo }})
        res.json(car)
    }
    if(ridaIki) {
        let car = await Car.find({rida: { $lte: ridaIki }})
        res.json(car)
    }

    // filtruoti pagal metus 
    if(metaiNuo) {
        let car = await Car.find({year: { $gte: metaiNuo }})
        res.json(car)
    }
    if(metaiIki) {
        let car = await Car.find({year: { $lte: metaiIki }})
        res.json(car)
    }

    // filtras pagal pavaru deze
    if(pavaruDeze === "automatine") {
        let car = await Car.find({pavaruDeze: "automatine"})
        res.json(car)
    } else {
        let car = await Car.find({pavaruDeze: "mechanine"})
        res.json(car)
    }

}

// sort cars by (years, name, rida)

// by years
    sortCarsbyYears = async (req, res) => {
        let cars = await Car.find({}).sort({year: "asc"})
        res.json(cars)
    }
//  by name
    sortCarsbyName = async (req, res) => {
        let cars = await Car.find({}).sort({name: "asc"})
        res.json(cars)
    }
// by rida
    sortCarsbyRida = async (req, res) => {
        let cars = await Car.find({}).sort({rida: "asc"})
        res.json(cars)
    }


module.exports = {
    saveObject,
    getObjectById,
    deleteCar,
    getAllItems,
    updateObject,
    filter,
    sortCarsbyYears,
    sortCarsbyName,
    sortCarsbyRida
}