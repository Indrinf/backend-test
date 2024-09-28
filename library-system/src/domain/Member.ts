import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../infrastructure/database';

export class Member extends Model {
    public code!: string;
    public name!: string;
    public borrowedBooksCount!: number;
    public penaltyUntil!: Date | null;
}

Member.init({
    code: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    borrowedBooksCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    penaltyUntil: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Member',
});
