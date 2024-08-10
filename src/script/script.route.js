import { Router } from 'express';
import { ScriptController } from './script.controller.js';

const router = Router();
const scriptController = new ScriptController();


router.post('/', scriptController.createScript);
router.get('/:scriptId', scriptController.getScript);
router.delete('/:scriptId', scriptController.deleteScript);
router.put('/:scriptId', scriptController.updateScript);

export { router as ScriptRoute };