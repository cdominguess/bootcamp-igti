const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'kashin.db.elephantsql.com',
    database: 'erlgdrhb',
    username: 'erlgdrhb',
    password: 'G6RYMTMx6Kpr7PMOWudGPkZ',
    logging: false
});

const clienteModel = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        CPF: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    return Cliente;
}

const consultaModel = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Consulta', {
        Valor: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        Juros: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        Montante: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        Prestacoes: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Consulta;
}

const cliente = clienteModel(sequelize, Sequelize.DataTypes);
const consulta = consultaModel(sequelize, Sequelize.DataTypes);

cliente.hasMany(consulta, { as: 'Consultas' });
consulta.belongsTo(cliente);

module.exports = {
    cliente,
    consulta,
    sequelize
}
