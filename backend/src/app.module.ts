import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'tasks_db',
      autoLoadEntities: true, // Carrega automaticamente as entidades definidas
      synchronize: true, // Sincroniza o esquema do banco de dados com as entidades (somente em DEV)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
