import { ClientTypes } from "../../@types/ClientTypes.ts";
import { Driver } from "../Driver.ts";
import { ConnectionOptions } from "../../connection/ConnectionOptions.ts";
import { MySQLClient } from "../../../deps.ts";

/**
 * Organizes communication with MySQL DBMS.
 */
export class MysqlDriver implements Driver {
  client: ClientTypes = new MySQLClient();

  /**
   * Performs connection to the database.
   */
  async connect(options: ConnectionOptions): Promise<ClientTypes> {
    return this.client.connect(options);
  }

  /**
   * Closes connection with the database.
   */
  async disconnect(): Promise<void> {
    return this.client.close();
  }
}
