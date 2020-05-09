const SYS_CONFIG = require('config.system.setting');
const logger = require('utils.log').getLogger("manager.creep");
const creepConfigs = require('config.creep');

function manageCreep(roomName) {
    for (name in creepConfigs) {
        if (!Game.creeps[name]) {
            logger.debug("⚡ Now:" + Game.rooms[roomName].energyAvailable);
            logger.debug("⚡ Max:" + Game.rooms[roomName].energyCapacityAvailable);
            if (Game.rooms[roomName].energyAvailable >= 300) {
                const creepTemplate = require('manager.creep.template').genTemplate(roomName);
                if (name.search("Mover") != -1) {
                    var template = creepTemplate.getMoverTemplate();
                } else {
                    var template = creepTemplate.getDefaultTemplate();
                }
                delete Memory.creeps[name];
                var result = Game.spawns[SYS_CONFIG.SPAWN_NAME].spawnCreep(template, name, { memory: { room: roomName } });
                if (result != OK) {
                    logger.warn("Creep 重生失败！错误代码：" + result)
                } else {
                    logger.info('正在重生 : ' + name);
                }
            }
            return;
        }
    }
}

module.exports = {
    manageCreep: manageCreep
};