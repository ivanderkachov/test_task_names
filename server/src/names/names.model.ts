import { Column, DataType, Model, Table } from "sequelize-typescript";

interface NameCreationAttrs {
  name: string;
  rank?: number;
}

@Table({ tableName: "names" })
export class Name extends Model<Name, NameCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rank: number;
}
