import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';
const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue:
            'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
    },
    address: {
        type: DataTypes.STRING,
        defaultValue: '123 Fake St, City, Country',
    },
    password: {
        type: DataTypes.STRING,
    },
});

const Appointment = sequelize.define('appointment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
    },
    time: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
    pago: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    reason: {
        type: DataTypes.STRING,
    },
});

const Doctor = sequelize.define('doctor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    speciality: {
        type: DataTypes.STRING,
    },
});

const Clinic = sequelize.define('clinic', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
        defaultValue: '123 Fake St, City, Country',
    },
});

// RELATIONS

User.hasMany(Appointment);
Appointment.belongsTo(User);

Doctor.hasMany(Appointment);
Appointment.belongsTo(Doctor);

Clinic.hasMany(Doctor, {
    foreignKey: 'clinicId',
});
Doctor.belongsTo(Clinic);

Clinic.hasMany(Appointment);
Appointment.belongsTo(Clinic);

Doctor.belongsTo(User, {
    as: 'user',
    foreignKey: 'userId',
});

export { User, Appointment, Doctor, Clinic };
