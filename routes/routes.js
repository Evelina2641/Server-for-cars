const router = require('express').Router();
const CarController = require('../car/carController')

router.get('/', (request, response) => {
    response.send('Hello world')
})

router.post('/car', CarController.saveObject)
router.get('/car', CarController.getObjectById)
router.delete('/car', CarController.deleteCar)
router.get('/car/all', CarController.getAllItems)
router.patch('/car', CarController.updateObject)
router.get('/car/filter', CarController.filter)
router.get('/car/sortByYears', CarController.sortCarsbyYears)
router.get('/car/sortByName', CarController.sortCarsbyName)
router.get('/car/sortByRida', CarController.sortCarsbyRida)

module.exports = router