import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { NamesController } from './names.controller';
import { Name } from './names.model';
import { NamesService } from './names.service';

@Module({
  controllers: [NamesController],
  providers: [NamesService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([Name])
  ],
})
export class NamesModule {}
