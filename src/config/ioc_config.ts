import { Kernel } from "inversify";
import "reflect-metadata";
import SERVICE_IDENTIFIER from "../constants/identifiers";
import TAG from "../constants/tags";
import Weapon from "../interfaces/weapon";
import Warrior from "../interfaces/weapon";
import Ninja from "../entities/warriors/ninja";
import Samurai from "../entities/warriors/samurai";
import Shuriken from "../entities/weapons/shuriken";
import Katana from "../entities/weapons/katana";

let kernel = new Kernel();

kernel.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Ninja).whenTargetNamed(TAG.CHINESE);
kernel.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Samurai).whenTargetNamed(TAG.JAPANESE);
kernel.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Shuriken).whenTargetNamed(TAG.CHINESE);
kernel.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Katana).whenTargetNamed(TAG.JAPANESE);

export default kernel;
