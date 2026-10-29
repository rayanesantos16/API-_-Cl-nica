// imports

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

//não importa onde será chamado, sempre vai conseguir encontrar o arquivo 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const caminhoDados = path.join(__dirname, "BD","tabela_atendimentos.json");


// logica


// funcões auxiliares