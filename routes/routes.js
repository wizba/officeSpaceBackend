const officeController = require('../controller/office.controller');

module.exports = (app) => {
    app.route('/office')
        .get(officeController.getAllOffice)
        .post(officeController.createOffice);
    app.route('/office/:officeId')
        .get(officeController.getOfficeById)
        .put(officeController.updateOffice)
        .delete(officeController.deleteOffice);
}