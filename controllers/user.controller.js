const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const userCreate =async (req, res) => {
    if (!req.body.firstname) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob ,
        address: req.body.address
      };
    //   const userData = await User.create(user) 
      User.create(user)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });
};

const userFindAll = async(req, res) => {
    User.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };

  const userFindbyId =async (req, res) => {
    const user_id = req.params.user_id;
  
    User.findByPk(user_id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${user_id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + user_id
        });
      });
  };

  const userUpdate = (req, res) => {
    const user_id = req.params.user_id;
  
    User.update(req.body, {
      where: { user_id: user_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${user_id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + user_id
        });
      });
  };

  const userDelete =async (req, res) => {
    const user_id = req.params.user_id;
  
    User.destroy({
      where: { user_id: user_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${user_id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + user_id
        });
      });
  };


module.exports={userCreate,userFindAll,userFindbyId,userUpdate,userDelete}