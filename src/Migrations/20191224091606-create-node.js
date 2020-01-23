var sequelize = require("sequelize");

module.exports = {
    up: function (queryInterface) {
        return queryInterface.createTable('Nodes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER
            },
            url: {
                type: sequelize.STRING
            },
            token: {
                type: sequelize.STRING
            },
            address: {
                type: sequelize.STRING
            },
            userId: {
                type: sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: sequelize.DATE
            }
        });
    },
    down: function (queryInterface) {
        return queryInterface.dropTable('Nodes');
    }
};
