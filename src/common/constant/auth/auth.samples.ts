import { LoginDto } from "src/modules/v1/auth/dto/login.dto";
import { RegisterDto } from "src/modules/v1/auth/dto/register.dto";

export const SampleCreateUser = {
    type: RegisterDto,
    description: 'Data required to create a new user.',
    examples: {
        example1: {
            summary: 'Basic sample',
            value: {
                name: 'Juan Ramon Perez',
                email: 'juan@gmail.com',
                password: '12345678'
            }
        }
    }
}

export const sampleResponse = {
    example: {
        "data": {
            "name": "Juan Ramon Perez",
            "email": "juan@gmail.com",
            "password": "$2b$10$xtz4JYn810PgeXo8oz8uCuvyY2KgNn/VyHcwlOOX3JcaoM2px5iNu",
            "pk_user": 4
        },
        "message": "Success request create new user",
        "success": true,
        "statusCode": 200
    }
}

export const CreateUserOperation = {
    summary: 'Register new user',
    description: 'Process to create new user account',
}

export const LoginUserOperation = {
    summary: 'Login user exist',
    description: 'Process to login user',
}

export const AuthUserOperation = {
    summary: 'Auth user logged',
    description: 'Process to authentication user logged',
}

export const SampleLoginUser = {
    type: LoginDto,
    description: 'Data required to login user.',
    examples: {
        example1: {
            summary: 'Basic sample',
            value: {
                email: 'juan@gmail.com',
                password: '12345678'
            }
        }
    }
}

export const ResponseLoginSample = {
    example: {
        data: {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsImlhdCI6MTc2MTE3NDQzNiwiZXhwIjoxNzYxMjYwODM2fQ.uYnhVRew4nippNPtltk-wE344JcsNvTHMf8t62Iru4A",
            user: {
                pk_user: 3,
                name: "Juan Ramon Perez",
                email: "juan@gmail.com",
                password: "$2b$10$MBJsvsKLL2PkSVXW/ccd4OySkT.P2b2VFcQ37F2f6W1AMEurpRNA2"
            }
        },
        message: "Success request login user auth",
        success: true,
        statusCode: 200
    }
}

export const ResponseAuthSample = {
    example: {
        data: {
            pk_user: 1,
            name: "Aksel Herrera ",
            email: "aksel@gmail.com",
            password: "$2b$10$W65431RSxKrLria4RFy0X.LjrqDMQ5HKSFogcIttuMmkd1mBC1T.K"
        },
        message: "Success request authentication",
        success: true,
        statusCode: 200
    }

}