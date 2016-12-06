import { Container } from "inversify";
import "reflect-metadata";
import SERVICE_IDENTIFIER from "../constants/identifiers";
import TAG from "../constants/tags";
import Weapon from "../interfaces/weapon";
import Warrior from "../interfaces/weapon";
import Ninja from "../entities/warriors/ninja";
import Battle from "../interfaces/battle";
import Samurai from "../entities/warriors/samurai";
import Shuriken from "../entities/weapons/shuriken";
import Katana from "../entities/weapons/katana";
import EpicBattle from "../entities/battle/epic_battle";

let container = new Container();

container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Ninja).whenTargetNamed(TAG.CHINESE);
container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Samurai).whenTargetNamed(TAG.JAPANESE);
container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Shuriken).whenParentNamed(TAG.CHINESE);
container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Katana).whenParentNamed(TAG.JAPANESE);
container.bind<Battle>(SERVICE_IDENTIFIER.BATTLE).to(EpicBattle);

export default container;
