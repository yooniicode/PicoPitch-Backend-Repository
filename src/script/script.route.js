import { Router } from 'express';
import { ScriptController } from './script.controller.js';
import {checkScript} from "../health/health.controller";

export const scriptRoute = Router();
const scriptController = new ScriptController();

scriptRoute.get('', checkScript);
scriptRoute.post('/', scriptController.createScript);
scriptRoute.get('/:scriptId', scriptController.getScript);
scriptRoute.delete('/:scriptId', scriptController.deleteScript);
scriptRoute.put('/:scriptId', scriptController.updateScript);

