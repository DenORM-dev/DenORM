import { Driver } from "../driver/Driver.ts";
import { DriverFactory } from "../driver/DriverFactory.ts";
import { ConnectionOptions } from "./ConnectionOptions.ts";

let connection: Connection;

class Connection {
  /**
   * Connection options.
   */
  readonly options: ConnectionOptions;

  /**
   * Database driver used by this connection.
   */
  readonly driver: Driver;

  /**
   * Indicates if connection is initialized or not.
   */
  private isConnected: boolean;

  constructor(options: ConnectionOptions) {
    this.options = options;
    this.driver = new DriverFactory().create(this.options.type);
    this.isConnected = false;
  }

  /**
   * Connect database
   */
  async connect(): Promise<this> {
    if (this.isConnected) throw new Error("Database connection is already connected");

    await this.driver.connect(this.options);
    this.isConnected = true;

    return this;
  }

  /**
   * Close database connection
   */
  async close(): Promise<void> {
    if (!this.isConnected) throw new Error("Database connection is already disconnected");

    await this.driver.disconnect();
    this.isConnected = false;
  }
}

/**
 * create connection
 */
export const createConnection = (options: ConnectionOptions) => {
  connection = new Connection(options);

  return connection;
};

/**
 * get connection
 */
export const getConnection = () => {
  return connection;
};
