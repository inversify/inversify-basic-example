import { inject, injectable } from "inversify";
import Warrior from "../../interfaces/warrior";
import Weapon from "../../interfaces/weapon";
import TAG from "../../constants/tags";

@injectable()
class Samurai implements Warrior {
    public name: string;
    public weapon: Weapon;
    public constructor(@inject(TAG.JAPANESE) weapon: Weapon) {
        name = "Samurai";
        this.weapon = weapon;
    }
}

export default Samurai;
