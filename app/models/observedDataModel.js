module.exports = (sequelize, Sequelize) => {
    const ObservedData = sequelize.define("observedData", {
      DeviceSerialNumber: {
        type: Sequelize.STRING
      },
      CameraAngle: {
        type: Sequelize.STRING
      },
      ZipFile: {
        type: Sequelize.STRING
      }
    });
  
    return ObservedData;
  };