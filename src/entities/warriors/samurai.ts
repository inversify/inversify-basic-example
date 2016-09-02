import { inject, injectable } from "inversify";
import Warrior from "../../interfaces/warrior";
import Weapon from "../../interfaces/weapon";
import SERVICE_IDENTIFIER from "../../constants/identifiers";

@injectable()
class Samurai implements Warrior {
    public name: string;
    public weapon: Weapon;
    public constructor(
        @inject(SERVICE_IDENTIFIER.WEAPON) weapon: Weapon
    ) {
        name = "Samurai";
        this.weapon = weapon;
    }
}

export default Samurai;
