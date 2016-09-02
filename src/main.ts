import kernel from "./config/ioc_config";
import SERVICE_IDENTIFIER from "./constants/identifiers";
import Warrior from "./interfaces/warrior";
import Weapon from "./interfaces/weapon";
import TAG from "./constants/tags";

let ninja = kernel.get<Warrior>(SERVICE_IDENTIFIER.WARRIOR).getTagedNammed(TAG.CHINESE);
let samurai = kernel.get<Weapon>(SERVICE_IDENTIFIER.WARRIOR).getTagedNammed(TAG.JAPANESE);

console.log(ninja.wepon.name);
console.log(samurai.wepon.name);
