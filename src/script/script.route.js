import { Router } from 'express';
import { ScriptController } from './script.controller.js';

export const scriptRoute = Router();
const scriptController = new ScriptController();


scriptRoute.post('/', scriptController.createScript);
scriptRoute.get('/:scriptId', scriptController.getScript);
scriptRoute.delete('/:scriptId', scriptController.deleteScript);
scriptRoute.put('/:scriptId', scriptController.updateScript);

