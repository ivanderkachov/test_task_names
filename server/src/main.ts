// import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { JwtAuthGuard } from "./auth/jwt-auth.guard"
import { ValidationPipe } from "./pipes/validation.pipe"



async function start() {
  const PORT = process.env.PORT || 8090
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())
  // app.useGlobalGuards(new JwtAuthGuard())

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start()