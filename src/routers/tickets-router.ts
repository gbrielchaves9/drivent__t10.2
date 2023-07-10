import { Router } from "express";
import { get } from "express";
import { authenticateToken } from "../middlewares";
import { tickets, getTickets } from "../ticket-controller"; 

const ticketsRouter = Router();

ticketsRouter.all("/*", authenticateToken).get("/types", ticketType).get('/', getTickets);

export { ticketsRouter };
