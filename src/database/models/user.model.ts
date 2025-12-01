import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "users",      // Actual table name in MySQL
  modelName: "User",       // Model name inside your project
  timestamps: true,        // Automatically adds createdAt, updatedAt
})
class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.ENUM("teacher", "institute", "super-admin", "student"),
    allowNull: false,
    defaultValue:"user",
  })
  declare role: string;
}

export default User