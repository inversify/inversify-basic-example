import Battle from "./interfaces/battle";
import container from "./config/ioc_config";
import SERVICE_IDENTIFIER from "./constants/identifiers";

// Composition root
let epicBattle = container.get<Battle>(SERVICE_IDENTIFIER.BATTLE);

console.log(epicBattle.fight());
