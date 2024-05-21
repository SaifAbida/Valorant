import { Container } from "inversify";
import { AgentRepository } from "./repositories/AgentRepository";
import { MapRepository } from "./repositories/MapRepository";
import { WeaponRepository } from "./repositories/WeaponRepository";
import { AgentServices } from "./services/AgentServices";
import { MapServices } from "./services/MapServices";
import { WeaponServices } from "./services/WeaponServices";
import { AgentControllers } from "./controllers/AgentControllers";
import { MapControllers } from "./controllers/MapControllers";
import { WeaponControllers } from "./controllers/WeaponControllers";

export const container = new Container();

container.bind<AgentRepository>(AgentRepository).toSelf();
container.bind<MapRepository>(MapRepository).toSelf();
container.bind<WeaponRepository>(WeaponRepository).toSelf();
container.bind<AgentServices>(AgentServices).toSelf();
container.bind<MapServices>(MapServices).toSelf();
container.bind<WeaponServices>(WeaponServices).toSelf();
container.bind<AgentControllers>(AgentControllers).toSelf();
container.bind<MapControllers>(MapControllers).toSelf();
container.bind<WeaponControllers>(WeaponControllers).toSelf();
