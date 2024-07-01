import express from "express";
import PetController from "../controller/PetController";
import { AppDataSource } from "../config/dataSource";
import PetRepository from "../repositories/PetRepository";

const router = express.Router();
const petRepository = new PetRepository(
  AppDataSource.getRepository("PetEntity"),
  AppDataSource.getRepository("AdotanteEntity")
);
const petController = new PetController(petRepository);

router.get("/", (req,res)=>petController.listaPet(req,res));
router.post("/", (req,res)=>petController.criaPet(req,res));
router.put("/:id", (req,res)=>petController.atualizaPet(req,res));
router.delete("/:id", (req,res)=>petController.deletaPet(req,res));
router.put("/:pet_id/:id_adotante", (req, res) =>
  petController.adotaPet(req, res)
);
export default router;
