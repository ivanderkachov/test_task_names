import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNameDto } from './dto/create-name.dto';
import { SearchNameDto } from './dto/search-name.dto';
import { Name } from './names.model';

@Injectable()
export class NamesService {

  constructor(@InjectModel(Name) private nameRepository: typeof Name) {}

  async getAllNames() {
    const names = await this.nameRepository.findAll()
    return names
  }

  async createName(dto: CreateNameDto) {
    const name = await this.nameRepository.create(dto)
    const newNames = await this.nameRepository.findAll();
    return newNames
  }

  async deleteName(id) {
    const name = await this.nameRepository.destroy({where:{id}})
    const newNames = await this.nameRepository.findAll();
    return newNames
  }

  async editName(name: string, nameId: string) {

    const newName = await this.nameRepository.update({name}, {where:{id: nameId}})
    const newNames = await this.nameRepository.findAll()
    return newNames
  }

    async editRank(rank: number, nameId: string) {
    const newName = await this.nameRepository.update({rank}, {where:{id: nameId}})
    const newNames = await this.nameRepository.findAll()
    return newNames
  }
}
