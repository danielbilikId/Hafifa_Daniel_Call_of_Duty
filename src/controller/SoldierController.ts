import { Request, Response } from 'express';
import Soldier from '../repository/soldierRepo';
import soldierSchema from '../repository/schemaValidation';

export async function insertSoldier(req:Request, res:Response) {
  try {
    const validateBody = soldierSchema.parse(req.body);
    const soldier = new Soldier(validateBody);
    await soldier.save((err, savedSoldier) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(savedSoldier);
      }
    });
  } catch {
    res.status(400).send('bad request, wrong fields');
  }
}

export async function getSoldierByID(req:Request, res:Response) {
  const { id } = req.params;
  const SoldierByID = await Soldier.findById({ _id: id });
  if (SoldierByID == null) {
    res.send(404);
  } else {
    res.status(200).send(SoldierByID);
  }
}

export async function getSoldierByQuery(req:Request, res:Response) {
  const SoldierByQuery = await Soldier.find(req.query);
  if (SoldierByQuery.length === 0) {
    res.send(404);
  } else {
    res.status(200).send(SoldierByQuery);
  }
}
