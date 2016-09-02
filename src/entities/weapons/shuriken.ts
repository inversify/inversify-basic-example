import Weapon from "../../interfaces/weapon";
import { injectable } from "inversify";

@injectable()
class Shuriken implements Weapon {
    public name: string;
    public constructor() {
        name = "Shuriken";
    }
}

export default Shuriken;
