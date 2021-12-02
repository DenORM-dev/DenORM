import { MySQLConfig } from "../../../deps.ts";

export interface MysqlConnectionOptions extends MySQLConfig {
  /**
   * Database type
   */
  readonly type: "mysql" | "mariadb";

  /**
   * Debug
   */
  readonly debug: boolean;
}
