import { injectable } from "inversify";
import { AgentInterface } from "../interfaces/AgentInterface";
import { Agent } from "../modules/agentModule";
import { agentCreationType, agentDocumentType } from "../types";

@injectable()
export class AgentRepository implements AgentInterface<agentDocumentType> {
  private readonly database = Agent;
  async create(agent: agentCreationType): Promise<agentDocumentType> {
    const newAgent = new this.database(agent);
    return (await newAgent.save()) as unknown as agentDocumentType;
  }
  async getOne(id: string): Promise<agentDocumentType> {
    return await this.database.findById(id);
  }
  async getAll(): Promise<agentDocumentType[]> {
    return await this.database.find();
  }
  async update(
    id: string,
    agent: agentCreationType
  ): Promise<agentDocumentType> {
    return await this.database.findByIdAndUpdate(id, agent, { new: true });
  }
  async delete(id: string): Promise<boolean> {
    return await this.database.findByIdAndDelete(id);
  }
}
