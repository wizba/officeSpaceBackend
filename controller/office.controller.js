const Office = require('../Model/officeData.schema');

exports.createOffice = (req, res) => {
    const newOffice = new Office({
        officeName: req.body.officeName,
        physicalAddress: req.body.physicalAddress,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        maxCapacity: req.body.maxCapacity,
        color: req.body.color,
        members: req.body.members
    });
    newOffice.save()
        .then(office => {
            res.json(office);
        })
        .catch(err => {
            res.json({
                message: err
            });
        });
}

exports.getAllOffice = (req, res) => {
    Office.find()
        .then(office => {
            res.json(office);
        })
        .catch(err => {
            res.json({
                message: err
            });
        });
}

exports.getOfficeById = (req, res) => {
    Office.findById(req.params.officeId)
        .then(office => {
            res.json(office);
        })
        .catch(err => {
            res.json({
                message: err
            });
        });
}

exports.updateOffice = (req, res) => {
    Office.findByIdAndUpdate(req.params.officeId, {
            $set: req.body
        }, {
            new: true
        })
        .then(office => {
            res.json(office);
        })
        .catch(err => {
            res.json({
                message: err
            });
        });
}

exports.deleteOffice = (req, res) => {
    Office.findByIdAndRemove(req.params.officeId)
        .then(office => {
            res.json({
                message: 'Office deleted successfully'
            });
        })
        .catch(err => {
            res.json({
                message: err
            });
        });
}