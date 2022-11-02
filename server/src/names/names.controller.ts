import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateNameDto } from './dto/create-name.dto';
import { SearchNameDto } from './dto/search-name.dto';
import { NamesService } from './names.service';

@Controller("names")
export class NamesController {
  constructor(private namesService: NamesService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  getAllNames() {
    return this.namesService.getAllNames();
  }

  // @UseGuards(JwtAuthGuard)
  @Post()
  createName(@Body() nameDto: CreateNameDto) {
    return this.namesService.createName(nameDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  deleteName(@Param() param) {
    return this.namesService.deleteName(param.id);
  }

  // @UseGuards(JwtAuthGuard)
  @Patch("name/:id")
  editName(@Body() body: { name: string }, @Param() param: { id: string }) {
     console.log(body, param);
    return this.namesService.editName(body.name, param.id);
  }

  // @UseGuards(JwtAuthGuard)
  @Patch("rank/:id")
  editRank(@Body() body: { rank: number }, @Param() param: { id: string }) {
    console.log(body, param)
    return this.namesService.editRank(body.rank, param.id);
  }
}
