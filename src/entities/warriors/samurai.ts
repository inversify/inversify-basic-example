import { inject, injectable } from "inversify";

import SERVICE_IDENTIFIER from "../../constants/identifiers";
import { Weapon, Warrior } from "../../interfaces";

@injectable()
export class Samurai implements Warrior {
    public name: string;
    public weapon: Weapon;
    public constructor(
        @inject(SERVICE_IDENTIFIER.WEAPON) weapon: Weapon
    ) {
        this.name = "Samurai";
        this.weapon = weapon;
    }
}
