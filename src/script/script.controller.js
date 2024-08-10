import { ScriptDAO } from './script.dao.js';
import { ScriptDTO } from './script.dto.js';
import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';

const scriptDAO = new ScriptDAO();

export class ScriptController {
    async createScript(req, res, next) {
        const { ppt_id, title, content } = req.body;
        const scriptDTO = new ScriptDTO(null, ppt_id, title, content);

        try {
            const scriptId = await scriptDAO.createScript(scriptDTO);
            res.status(201).send(response(status.SUCCESS, 'Script created'));
        } catch (error) {
            next(error);
        }
    }

    async getScript(req, res, next) {
        const { scriptId } = req.params;

        try {
            const script = await scriptDAO.getScriptById(scriptId);
            res.status(200).send(response(status.SUCCESS, 'Script retrieved'));
        } catch (error) {
            next(error);
        }
    }

    async deleteScript(req, res, next) {
        const { scriptId } = req.params;

        try {
            await scriptDAO.deleteScript(scriptId);
            res.status(200).send(response(status.SUCCESS, 'Script deleted successfully'));
        } catch (error) {
            next(error);
        }
    }

    async updateScript(res, req, next) {
        const { scriptId } = req.params;

        try{
            await scriptDAO.updateScript(scriptId);
            res.status(200).send(response(status.SUCCESS, 'script updated successfully'));
        } catch(error){
            next(error);
        }
}


}
