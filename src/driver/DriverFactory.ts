import { Driver } from "./Driver.ts";
import { MysqlDriver } from "./mysql/MySqlDriver.ts";

export class DriverFactory {
  /**
   * Create new Driver from type
   */
  create(type: string): Driver {
    switch (type) {
      case "mysql":
        return new MysqlDriver();
      case "mariadb":
        return new MysqlDriver();
      default:
        return new MysqlDriver();
    }
  }
}
