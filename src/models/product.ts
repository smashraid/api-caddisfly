import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';

import { Category} from './category';
import sequelize from '../utils/db';

export class Product extends Model {
    public ProductID!: number;
    public ProductName!: string;
    public SupplierID!: number;
    public CategoryID!: number;
    public QuantityPerUnit!: string;
    public UnitPrice!: number;
    public UnitsInStock!: number;
    public ReorderLevel!: number;
    public Discontinued!: boolean;
    
    public getCategories!: HasManyGetAssociationsMixin<Category>; // Note the null assertions!
    public addCategory!: HasManyAddAssociationMixin<Category, number>;
    public hasCategory!: HasManyHasAssociationMixin<Category, number>;
    public countCategories!: HasManyCountAssociationsMixin;
    public createCategory!: HasManyCreateAssociationMixin<Category>;

    public readonly categories?: Category[];

    public static associations: {
        categories: Association<Product, Category>;
    }
}

Product.init({
    ProductID: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    ProductName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SupplierID: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
     CategoryID: {
         type: DataTypes.NUMBER,
         allowNull: false
    //     references: {
    //         model: Category,
    //         key: 'CategoryID'
    //     }
    },
    QuantityPerUnit: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    UnitPrice: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    UnitsInStock: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    ReorderLevel: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    Discontinued: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'Product',
    timestamps: true
});

//Product.hasOne(Category);
