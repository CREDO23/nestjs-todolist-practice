import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.log(
      `\x1b[31m${request.method} - ${request.url} - ${new Date(Date.now()).toString()}`,
    );
    response.status(exception.getStatus()).json({
      status: exception.getStatus(),
      cause: exception.cause,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
