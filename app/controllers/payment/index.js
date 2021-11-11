const db = require("../../models");
const payment = db.payment;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const create = {
    invoice_number: req.body.invoice_number,
    metode_bayar: req.body.metode_bayar,
    bukti_bayar: req.body.bukti_bayar,
    tanggal_bayar: req.body.tanggal_bayar,
    status: req.body.status,
  };

  payment.create(create)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while create data",
      });
    });
};

exports.findAll = (req, res) => {
  payment.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while find payment",
      });
    });
};

exports.findOne = (req, res) => {
  const invoice_number = req.params.id;
  let condition = invoice_number ? { invoice_number: { [Op.eq]: `${invoice_number}` } } : null;

  payment.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrive payment with invoice_number = " + invoice_number,
      });
    });
};

exports.update = (req, res) => {
  const invoice_number = req.params.id;
  payment.update(req.body, {
    where: { invoice_number: invoice_number },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "Payment was updated successfully",
        });
      } else {
        res.send({
          message: `Cannot update payment with invoice_number=${invoice_number}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating payment with invoice_number=" + invoice_number,
      });
    });
};

exports.delete = (req, res) => {
  const invoice_number = req.params.id;

  payment.destroy({
    where: { invoice_number: invoice_number },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "Payment was deleted successfully",
        });
      } else {
        res.send({
          message: `Cannot delete payment with invoice_number=${invoice_number}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete payment with invoice_number=" + invoice_number,
      });
    });
};