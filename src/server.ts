import express, { Application } from 'express';
import { Server } from 'http';

export class SetupServer extends Application {
  private server: http.Server;

  constructor(private port = process.env.APP_PORT || 3333) {
    super();
  }
}
