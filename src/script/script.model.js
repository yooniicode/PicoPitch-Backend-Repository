import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.connect.js';
// import Presentation from '../presentation/presentation.model.js'; // Make sure this file exists and is correctly implemented

const Script = sequelize.define('Script', {
    script_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ppt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Presentations',
            key: 'ppt_id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'scripts',
    timestamps: false
});

// Script.belongsTo(Presentation, { foreignKey: 'ppt_id' });

export default Script;
