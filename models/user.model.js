module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      user_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
      },  
      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dob: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  
    return User;
  };