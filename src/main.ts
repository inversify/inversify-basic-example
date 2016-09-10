import kernel from "./config/ioc_config";
import SERVICE_IDENTIFIER from "./constants/identifiers";
import Battle from "./interfaces/battle";

// Composition root
let epicBattle = kernel.get<Battle>(SERVICE_IDENTIFIER.BATTLE);

console.log(epicBattle.fight());
