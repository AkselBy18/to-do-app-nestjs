import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from 'src/common/services/jwt/jwt.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
    private jwtService: JwtService
  ) {}

  public insert(data: CreateUserDto) {
    return this.repository.save(data);
  }

  public async findByToken(token: string): Promise<User|null>  {
    if (!token) { return null }
    const data = await this.jwtService.verify(token);
    if (!data) { return null }
    return this.findByEmail(data.email);
  }

  public findByEmail(email: string): Promise<User|null> {
    return this.repository.findOneBy({email});
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
