
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
 
// Xử lý các tuyến đường giống middleware của express
@Injectable()
export class LocalAuthenticationGuard extends AuthGuard('local') {}