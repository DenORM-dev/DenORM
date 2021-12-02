import { ColumnType } from "./ColumnTypes.ts";

export interface DefaultColumnTypes {
  /**
   * Column type for the create date column.
   */
  createDate: ColumnType;

  /**
   * Precision of datetime column. Used in MySql to define milliseconds.
   */
  createDatePrecision?: number;

  /**
   * Default value should be used by a database for "created date" column.
   */
  createDateDefault: string;

  /**
   * Column type for the update date column.
   */
  updateDate: ColumnType;

  /**
   * Precision of datetime column. Used in MySql to define milliseconds.
   */
  updateDatePrecision?: number;

  /**
   * Default value should be used by a database for "updated date" column.
   */
  updateDateDefault: string;

  /**
   * Column type for the delete date column.
   */
  deleteDate: ColumnType;

  /**
   * Precision of datetime column. Used in MySql to define milliseconds.
   */
  deleteDatePrecision?: number;

  /**
   * Nullable value should be used by a database for "deleted date" column.
   */
  deleteDateNullable: boolean;
}
