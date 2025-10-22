import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { ResponseHandler } from 'src/common/utils/response-handler.util';
import { LoginDto } from './dto/login.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthUserOperation, CreateUserOperation, LoginUserOperation, ResponseAuthSample, ResponseLoginSample, SampleCreateUser, SampleLoginUser, sampleResponse } from 'src/common/constant/auth/auth.samples';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation(CreateUserOperation)
  @ApiBody(SampleCreateUser) 
  @ApiResponse(sampleResponse)
  async register(@Body() body: RegisterDto) {
    try {
      return ResponseHandler.success(
        await this.authService.processRegister(body),
        'Success request create new user'
      );
    } catch (error) {
      return ResponseHandler.error('Error creating user : ' + (error.message ?? JSON.stringify(error)) , error.status || 500)
    }
  }

  @Post('login')
  @ApiOperation(LoginUserOperation)
  @ApiBody(SampleLoginUser)
  @ApiResponse(ResponseLoginSample)
  async login(@Body() body: LoginDto) {
    try {
      return ResponseHandler.success(
        await this.authService.processLogin(body),
        'Success request login user auth'
      )
    } catch (error) {
      return ResponseHandler.error('Error login user: ' + (error.message ?? JSON.stringify(error)) , error.status || 500)
    }
  }

  @Get('me')
  @ApiBearerAuth()
  @ApiOperation(AuthUserOperation)
  @ApiResponse(ResponseAuthSample)
  async authentication(@Query('token') token: string) {
    try {
      return ResponseHandler.success(
        await this.authService.processAuth(token),
        'Success request authentication'
      )
    } catch (error) {
      return ResponseHandler.error('Error authentication user: ' + (error.message ?? JSON.stringify(error)) , error.status || 500)
    }
  }
}
