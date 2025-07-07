import { ConfigService } from "@nestjs/config";
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

export function getMongoConnectionString({username, password, host, port, databaseName, authDatabase}): string {
  return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}

export function getMongooseOptions(optionSpace: string): MongooseModuleAsyncOptions {
  return {
    useFactory: async (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          username: config.get<string>(`${optionSpace}.db.user`),
          password: config.get<string>(`${optionSpace}.db.password`),
          host: config.get<string>(`${optionSpace}.db.host`),
          port: config.get<string>(`${optionSpace}.db.port`),
          authDatabase: config.get<string>(`${optionSpace}.db.authBase`),
          databaseName: config.get<string>(`${optionSpace}.db.name`),
        })
      }
    },
    inject: [ConfigService]
  }
}
