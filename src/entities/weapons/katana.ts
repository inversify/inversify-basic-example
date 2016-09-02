import Weapon from "../../interfaces/weapon";
import { injectable } from "inversify";

@injectable()
class Katana implements Weapon {
    public name: string;
    public constructor() {
        name = "Katana";
    }
}

export default Katana;
