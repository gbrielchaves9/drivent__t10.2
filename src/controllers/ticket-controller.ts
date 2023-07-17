import { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthenticatedRequest } from "../middlewares";
import ticketServer from "../ticketServer"; // Importe corretamente o módulo ticketServer, se necessário

export async function tickets(req: Request, res: Response) {
  try {
    const ticketType = await ticketServer.ticketType(); // Certifique-se de ter a definição correta de ticketServer
    return res.status(StatusCodes.OK).send(ticketType);
  } catch (e) {
    return res.sendStatus(StatusCodes.NO_CONTENT);
  }
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const ticket = await ticketServer.getTicket(userId); // Certifique-se de ter a definição correta de ticketServer e implemente a função getTicket
    return res.status(StatusCodes.OK).send(ticket);
  } catch (e) {
    return res.sendStatus(StatusCodes.NO_CONTENT);
  }
}
