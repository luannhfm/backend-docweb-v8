import { app } from './app';
import { env } from './env';

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server is running on http://localhost:${env.PORT}`);
  })
  .catch((error) => {
    console.error('Error starting server:', error);
    process.exit(1);
  });
