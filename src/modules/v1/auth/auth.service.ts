import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '../users/users.service';
import { CryptoService } from 'src/common/services/crypto/crypto.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from 'src/common/services/jwt/jwt.service';

@Injectable()
export class AuthService {

    constructor(
        private userRepository: UsersService,
        private cryptoServices: CryptoService,
        private jwtServices: JwtService
    ) {}

    //MARK: PUBLIC METHODS -------------------------------------------------------
    public async processRegister(body: RegisterDto) {
        if (!body.email?.trim() || !body.password?.trim() || !body.name?.trim()) {
            throw new HttpException('Invalid input data', HttpStatus.BAD_REQUEST)
        }
        const userFound = await this.userRepository.findByEmail(body.email);
        if (userFound) {
            throw new HttpException('User with this email already exist', HttpStatus.CONFLICT);
        }
        body.password = await this.cryptoServices.hashPassword(body.password);
        return this.userRepository.insert(body);
    }

    public async processLogin(data: LoginDto) {
        if (!data.email?.trim || !data.password?.trim()) {
            throw new HttpException('Invalid input data', HttpStatus.BAD_REQUEST)
        }
        const user = await this.userRepository.findByEmail(data.email);
        if (!user) {
            throw new HttpException('User not exist with this email', HttpStatus.NOT_FOUND);
        }
        if (!(await this.cryptoServices.comparePassword(data.password, user.password))) {
            throw new HttpException('Password is not valid', HttpStatus.BAD_REQUEST);
        }
        const token = await this.jwtServices.sing(data);
        return  {
            token,
            user
        }
    } 

    public async processAuth(token: string) {
        if (!token?.trim()) {
            throw new HttpException('Invalid input data', HttpStatus.BAD_REQUEST)
        }
        const data = await this.jwtServices.verify(token);
        if (!data) {
            throw new HttpException('Cant no get user data', HttpStatus.BAD_REQUEST)
        }
        return this.userRepository.findByEmail(data.email);
    }    
}
