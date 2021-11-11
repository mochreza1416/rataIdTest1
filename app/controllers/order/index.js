const db = require("../../models");
const order = db.order;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const create = {
    invoice_number: req.body.invoice_number,
    user_id: req.body.user_id,
    tanggal_pesan: req.body.tanggal_pesan,
    total: req.body.total
  };

  order.create(create)
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
  order.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while find order",
      });
    });
};

exports.findOne = (req, res) => {
  const invoice_number =  req.params.id;
  let condition = invoice_number ? { invoice_number: { [Op.eq]: `${invoice_number}` } } : null;

  order.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrive order with invoice_number = " + invoice_number,
      });
    });
};

exports.update = (req, res) => {
  const invoice_number = req.params.id;
  order.update(req.body, {
    where: { invoice_number: invoice_number },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "Order was updated successfully",
        });
      } else {
        res.send({
          message: `Cannot update order with invoice_number=${invoice_number}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating order with invoice_number=" + invoice_number,
      });
    });
};

exports.delete = (req, res) => {
  const invoice_number = req.params.id;

  order.destroy({
    where: { invoice_number: invoice_number },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "order was deleted successfully",
        });
      } else {
        res.send({
          message: `Cannot delete order with invoice_number=${invoice_number}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete order with invoice_number=" + invoice_number,
      });
    });
};