import { CoreModule } from './core/сore.module'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
	const app = await NestFactory.create(CoreModule)
	await app.listen(3000)
}
bootstrap()
