import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

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
    TasksModule,
  ],
})
export class AppModule {}
