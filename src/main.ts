import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT
  console.log(process.env.PORT)
  await app.listen(PORT, () => console.log(`Server is working on PORT ${PORT}`));

  /*
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://biazxyfb:2EVAaaikuTj9JAn4yGTgdvQtXO0VFE8L@cougar.rmq.cloudamqp.com/biazxyfb:5672'],
        queue: 'queue_name',
        queueOptions: {
          durable: false
    }
      }
    },
  );

  await app.listen();
  */
}
bootstrap();
