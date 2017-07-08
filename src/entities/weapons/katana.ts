import { injectable } from "inversify";

import Weapon from "../../interfaces/weapon";

@injectable()
class Katana implements Weapon {
    public name: string;
    public constructor() {
        this.name = "Katana";
    }
}

export default Katana;
