const controller = require('../controllers/plates.controller');

module.exports=(app)=>{
    app.post('/api/v1/createPlate',controller.createPlate);
    app.get('/api/v1/getPlateList',controller.getPlateList);
    app.get('/api/v1/getPlate/:id',controller.getPlateById);
    app.put('/api/v1/update/:id',controller.updatePlate);
    app.delete('/api/v1/delete/:id',controller.deletePlate)
}