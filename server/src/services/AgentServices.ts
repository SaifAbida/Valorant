import { AgentRepository } from "../repositories/AgentRepository";
import { inject, injectable } from "inversify";
import { agentCreationType, agentDocumentType } from "../types";
import { NotFoundError } from "routing-controllers";

@injectable()
export class AgentServices {
  constructor(
    @inject(AgentRepository) private readonly agentRepository: AgentRepository
  ) {}

  async createAgent(agent: agentCreationType) {
    return await this.agentRepository.create(agent);
  }

  async getAgent(id: string) {
    const agent = await this.agentRepository.getOne(id);
    if (!agent) {
      throw new NotFoundError("Agent not found");
    }
    return agent;
  }

  async getAgents(filters: Partial<agentDocumentType> = {}): Promise<agentDocumentType[]> {
    return await this.agentRepository.getAll(filters);
  }

  async updateAgent(id: string, agent: agentCreationType) {
    const updatedAgent = await this.agentRepository.update(id, agent);
    if (!updatedAgent) {
      throw new NotFoundError("Agent not found");
    }
    return updatedAgent;
  }

  async deleteAgent(id: string) {
    const deletedAgent = await this.agentRepository.delete(id);
    if (!deletedAgent) {
      throw new NotFoundError("Agent not found");
    }
    return true;
  }
}
