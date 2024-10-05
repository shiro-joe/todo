import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as nunjucks from "nunjucks";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  nunjucks.configure(join(__dirname, "..", "views"), {
    autoescape: true,
    express: app.getHttpAdapter().getInstance(),
  })

  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("njk");

  await app.listen(3000);
}
bootstrap();
