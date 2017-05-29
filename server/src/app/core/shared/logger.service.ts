import { Component, Logger } from "@nestjs/common";

export class LoggerService {
  private _logger: Logger;

  constructor(caller: string) {
    // const caller = '';
    this._logger = new Logger(caller);
  }

  public log(message: string) {
    this._logger.log(message);
  }

  public value(target: any) {
    this._logger.log(`${JSON.stringify(Object.getPrototypeOf(target))} : ${JSON.stringify(target)} `);
  }

  public warn(message: string) {
    this._logger.warn(message);
  }

  public error(message: string) {
    this._logger.error(message);
  }
}
