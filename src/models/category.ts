import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';

import { Product } from './product';
import sequelize from '../utils/db';

export class Category extends Model {
    public CategoryID!: number;
    public CategoryName!: string;
    public Description!: string;
    public Picture!: string | null;    
}

Category.init({
    CategoryID: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    CategoryName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    Picture: {
        type: DataTypes.BLOB,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'Category',
    timestamps: true
});

Category.hasMany(Product, {
    sourceKey: 'CategoryID',
    foreignKey: 'CategoryID',
    as: 'categories'
});
Product.belongsTo(Category, {
    foreignKey: 'CategoryID'
});0

