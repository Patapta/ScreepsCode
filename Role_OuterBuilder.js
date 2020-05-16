const logger = require('utils.log').getLogger("OuterBuilder");

module.exports = config => ({
    // 采集能量矿
    source: creep => {
        var source = Game.getObjectById(config.sourceId)
        if (source && source.store[RESOURCE_ENERGY] > 0) {
            if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.guiDebug("🔽");
                creep.moveTo(source);
            }
        }
    },
    // 存储能量逻辑
    target: creep => {
        if(creep.room.name != config.roomName){
            creep.moveTo(new RoomPosition(config.path[0][0], config.path[0][1], config.roomName))
            return;
        }
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if (targets.length) {
            creep.guiDebug("🌇");
            if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        } else {
            logger.warn(creep.name + "找不到可建造的建筑点！")
            creep.guiDebug("🈳");
        }
    },
    // 状态切换条件，稍后会给出具体实现
    switch: creep => creep.updateState()
})