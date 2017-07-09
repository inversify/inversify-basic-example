import { inject, injectable } from "inversify";

import SERVICE_IDENTIFIER from "../../constants/identifiers";
import Warrior from "../../interfaces/warrior";
import Weapon from "../../interfaces/weapon";

@injectable()
class Samurai implements Warrior {
    public name: string;
    public weapon: Weapon;
    public constructor(
        @inject(SERVICE_IDENTIFIER.WEAPON) weapon: Weapon
    ) {
        this.name = "Samurai";
        this.weapon = weapon;
    }
}

export default Samurai;
