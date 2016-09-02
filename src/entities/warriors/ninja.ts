import { inject, injectable } from "inversify";
import Warrior from "../../interfaces/warrior";
import Weapon from "../../interfaces/weapon";
import TAG from "../../constants/tags";

@injectable()
class Ninja implements Warrior {
    public name: string;
    public weapon: Weapon;
    public constructor(@inject(TAG.CHINESE) weapon: Weapon) {
        name = "Ninja";
        this.weapon = weapon;
    }
}

export default Ninja;
