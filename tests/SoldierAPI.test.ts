import request from 'supertest';
import router from '../src/routes/routes';
import Soldier from '../src/repository/soldierRepo';
import * as soldiers from './testData';

const app = router;
beforeEach(async () => {
  await Soldier.deleteMany();
});
describe('Insert Soldier into DB', () => {
  it('Should Send an API Post Request and save soldier to DB, Expected 201:', async () => {
    await request(app).post('/soldiers').send(soldiers.SoldierToBeAddedForPOSTtest).expect(201);
  });
});

describe('Fail to insert Soldier into DB', () => {
  it('Should Send an API Post Request and not save soldier to DB, Expected 400:', async () => {
    await request(app).post('/soldiers').send(soldiers.SoldierToBeAddedForFailedPOSTtest).expect(400);
  });
});

describe('Find Soldier By ID', () => {
  it('Should Send an API Get Request If Soldier Is In DB, Expected 200:', async () => {
    const sentSoldier = new Soldier(soldiers.SoldierToBeFound); await sentSoldier.save();
    request(app).get('/soldiers/1').expect(sentSoldier);
  });
});

describe('Soldier by ID not in DB', () => {
  it('Should Send an API Get Request If Soldier Is Not In DB, Expected 404:', async () => {
    request(app).get('/soldiers/505').expect(404);
  });
});

describe('Search for Soldier by query in DB', () => {
  it('Should Send an API Get Request and see if Soldier is in DB, Expected 200:', async () => {
    const sentSoldier = new Soldier(soldiers.SoldierToSearch); await sentSoldier.save();
    request(app).get('/soldiers?name=Darth Vader&rank=Silver').expect(sentSoldier);
  });
});

describe('Error search by query', () => {
  it('Should Send an API Get Request and not find Soldier in DB, Expected 404:', async () => {
    await request(app).get('/soldiers?name=Luke&rank=Skywalker&lightsaber=blue').expect(404);
  });
});
