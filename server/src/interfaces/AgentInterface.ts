import { agentCreationType } from "../types";

export interface AgentInterface<agentDocumentType> {
  create(agent: agentCreationType): Promise<agentDocumentType>;
  getOne(id: string): Promise<agentDocumentType | null>;
  getAll(): Promise<agentDocumentType[]>;
  update(
    id: string,
    agent: agentCreationType
  ): Promise<agentDocumentType | null>;
  delete(id: string): Promise<boolean | null>;
}
