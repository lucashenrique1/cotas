import usersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ Message: 'Hello WORD!' });
});

routes.use('/users', usersRouter);

export default routes;
