import Script from '/script.model.js'

export class ScriptDAO {
    async createScript(ScriptDTO) {
        const script = await Script.create(ScriptDTO);
        return script.script_id;
    }


    async getScriptById(script_id) {
        return await Script.findByPk(script_id);
    }

    async deleteScript(script_id) {
        const script = await Script.findByPk(script_id);
        if (script) {
            await script.destroy();
        } else {
            throw new Error('Script not found');
        }
    }

    async updateScript(script_id){
        return await Script.update(
            { updated_at: new Date() }, // 수정 시 updated_at 필드 업데이트
            { where: { script_id } }
        );
    }
}