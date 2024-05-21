import { inject, injectable } from "inversify";
import { AgentServices } from "../services/AgentServices";
import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put,
  Req,
  Res,
} from "routing-controllers";
import { agentCreationType } from "../types";
import { Request, Response } from "express";

@injectable()
@JsonController("/agent")
export class AgentControllers {
  constructor(
    @inject(AgentServices) private readonly agentServices: AgentServices
  ) {}

  @Post("/")
  async createAgent(@Body() agent: agentCreationType, @Res() res: Response) {
    const newAgent = await this.agentServices.createAgent(agent);
    return res.status(200).json(newAgent);
  }

  @Get("/")
  async getAllAgents(@Req() req: Request, @Res() res: Response) {
    const filters = req.query;
    const agents = await this.agentServices.getAgents(filters);
    return res.status(200).json(agents);
  }

  @Get("/:id")
  async getOneAgent(@Param("id") id: string, @Res() res: Response) {
    const agent = await this.agentServices.getAgent(id);
    return res.status(200).json(agent);
  }

  @Put("/:id")
  async updateAgent(
    @Param("id") id: string,
    @Body() agent: agentCreationType,
    @Res() res: Response
  ) {
    const updatedAgent = await this.agentServices.updateAgent(id, agent);
    return res.status(200).json(updatedAgent);
  }

  @Delete("/:id")
  async deleteAgent(@Param("id") id: string, @Res() res: Response) {
    await this.agentServices.deleteAgent(id);
    return res.status(200).json({ message: "Agent Deleted successfully" });
  }
}
