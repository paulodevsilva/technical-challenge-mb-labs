import express, { Application } from 'express';
import cors from 'cors';

export class SetupServer extends Application {
  private server: http.Server;

  constructor(private port = process.env.APP_PORT || 3333) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
  }

  private getApp(): Application {
    return this.app;
  }

  private setupExpress(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors({ origin: '*' }));
  }

  public listen(): void {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

// add compression
// add helmet
