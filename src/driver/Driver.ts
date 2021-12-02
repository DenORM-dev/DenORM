import { ClientTypes } from "../@types/ClientTypes.ts";
import { ConnectionOptions } from "../connection/ConnectionOptions.ts";

export interface Driver {
  /**
   * Client for driver
   */
  client: ClientTypes;

  /**
   * connect to the database
   */
  connect(options: ConnectionOptions): Promise<ClientTypes>;

  /**
   * disconnect to the database
   */
  disconnect(): Promise<void>;
}
