const db = require("../../models");
const user = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.username) {
    res.status(400).send({
      message: "username can not be empty",
    });
    return;
  } else if (!req.body.password) {
    res.status(400).send({
      message: "password can not be empty",
    });
    return;
  } else if (!req.body.nama) {
    res.status(400).send({
      message: "nama can not be empty",
    });
    return;
  } else if (!req.body.HP) {
    res.status(400).send({
      message: "HP can not be empty",
    });
    return;
  } else if (!req.body.alamat) {
    res.status(400).send({
      message: "alamat can not be empty",
    });
    return;
  } else if (!req.body.email) {
    res.status(400).send({
      message: "email can not be empty",
    });
    return;
  }

  const create = {
    username: req.body.username,
    password: req.body.password,
    nama: req.body.nama,
    HP: req.body.HP,
    alamat: req.body.alamat,
    email: req.body.email,
  };

  user.create(create)
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
  user.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while find user",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  let condition = id ? { id: { [Op.eq]: `${id}` } } : null;
  user.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrive user with id = " + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  user.update(req.body, {
    where: { id: id },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "User was updated successfully",
        });
      } else {
        res.send({
          message: `Cannot update user with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating user with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  user.destroy({
    where: { id: id },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "User was deleted successfully",
        });
      } else {
        res.send({
          message: `Cannot delete user with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete user with id=" + id,
      });
    });
};