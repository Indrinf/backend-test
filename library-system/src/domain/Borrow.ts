import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../infrastructure/database';
import { Member } from './Member';
import { Book } from './Book';

export class Borrow extends Model {
    public id!: number;
    public memberCode!: string;
    public bookCode!: string;
    public borrowDate!: Date;
    public returnDate?: Date;
    public penalty?: boolean;

    public static associate() {
        Borrow.belongsTo(Member, { foreignKey: 'memberCode', targetKey: 'code' });
        Borrow.belongsTo(Book, { foreignKey: 'bookCode', targetKey: 'code' });
    }
}

Borrow.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    memberCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    borrowDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    penalty: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
}, {
    sequelize,
    modelName: 'Borrow',
});