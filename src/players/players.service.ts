import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayersService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePlayerDto) {
    return this.prisma.player.create({ data });
  }

  async topScorers() {
    return this.prisma.player.findMany({
      orderBy: { goals: 'desc' },
      take: 3,
    });
  }

  findAll() {
    return this.prisma.player.findMany();
  }

  findOne(id: number) {
    return this.prisma.player.findUnique({ where: { id } });
  }

  async topAssists() {
    return this.prisma.player.findMany({
      orderBy: { assists: 'desc' },
      take: 3,
    });
  }
}
