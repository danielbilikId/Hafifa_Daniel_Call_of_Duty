import request from 'supertest';
import router from '../src/routes/routes';

const app = router;

describe('Is Soldier Alive', () => {
  it('Should Send an API Get Request If Soldier Is Alive, Expected 200:', () => {
    request(app).get('/health').expect('I am alive!');
  });
});
