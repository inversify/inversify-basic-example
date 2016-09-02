import kernel from "./config/ioc_config";
import SERVICE_IDENTIFIER from "./constants/identifiers";
import Warrior from "./interfaces/warrior";
import Weapon from "./interfaces/weapon";
import TAG from "./constants/tags";

function getWarrior(tag: string) {
    return kernel.get<Warrior>(SERVICE_IDENTIFIER.WARRIOR).getTagedNammed(tag);
}

console.log(getWarrior(TAG.CHINESE));
console.log(getWarrior(TAG.JAPANESE));
