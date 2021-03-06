const OUTERWORLD_CONFIG = require('config.outerworld')
const CONFIG = require('config')
const harvester = require('Role_Harvester')
const upgrader = require('Role_Upgrader')
const builder = require('Role_Builder')
const mover = require('Role_Mover')
const outerharvester = require('Role_OuterHarvester')
const claimer = require('Role_OuterClaimer')
const outbuilder = require('Role_OuterBuilder')
const miner = require('Role_Miner')
const outmover = require('Role_OuterMover')
const tank = require('Role_Tank')
const guard = require('Role_Guard')
const colonist = require('Role_Colonists')
const dismantler = require('Role_Dismantler')
const specialMover = require('Role_SpecialMover')
const remoteupgrader = require('Role_RemoteUpgrader')
const remoteHarvester = require('RemoteHarvester')


module.exports = {
    /**
     *   OuterClaimer配置文件
     *      参数：
     *          sourceId:数组形式储存要预订的Controller
     *          targetRoomName:Controller所对应房间名称
     *          pathFinderPoint:辅助寻路点位，尚在开发功能
     */




    /**
     *   OuterHarvester配置文件
     *      参数：
     *          sourceId:能量采集点
     *          targetRoomName:能量采集点所对应房间名称
     *          targetId:能量储存点
     *          pathFinderPoint:辅助寻路点位，尚在开发功能
     */
    OuterHarvester_E5S21_01: outerharvester({
        sourceId: OUTERWORLD_CONFIG.E5S21[0][0],
        targetRoomName: "E5S21",
        targetId: OUTERWORLD_CONFIG.E5S21[0][1],
        pathFinderPoint: [[49, 21]]
    }),
    OuterHarvester_E5S21_02: outerharvester({
        sourceId: OUTERWORLD_CONFIG.E5S21[1][0],
        targetRoomName: "E5S21",
        targetId: OUTERWORLD_CONFIG.E5S21[1][1],
        pathFinderPoint: [[38, 0]]
    }),
    OuterHarvester_E5S22: outerharvester({
        sourceId: OUTERWORLD_CONFIG.E5S22[0][0],
        targetRoomName: "E5S22",
        targetId: OUTERWORLD_CONFIG.E5S22[0][1],
        pathFinderPoint: [[38, 0]]
    }),
    OuterHarvester_E6S23: outerharvester({
        sourceId: OUTERWORLD_CONFIG.E6S23[0][0],
        targetRoomName: "E6S23",
        targetId: OUTERWORLD_CONFIG.E6S23[0][1],
        pathFinderPoint: [[38, 0]]
    }),
    OuterHarvester_E9S23_1: outerharvester({
        sourceId: OUTERWORLD_CONFIG.E9S23[0][0],
        targetRoomName: "E9S23",
        targetId: OUTERWORLD_CONFIG.E9S23[0][1],
        pathFinderPoint: [[32, 49]]
    }),
    OuterHarvester_E9S23_2: outerharvester({
        sourceId: OUTERWORLD_CONFIG.E9S23[1][0],
        targetRoomName: "E9S23",
        targetId: OUTERWORLD_CONFIG.E9S23[1][1],
        pathFinderPoint: [[32, 49]]
    }),
    OuterHarvester_E8S24: outerharvester({
        sourceId: OUTERWORLD_CONFIG.E8S24[0][0],
        targetRoomName: "E8S24",
        targetId: OUTERWORLD_CONFIG.E8S24[0][1],
        pathFinderPoint: [[32, 49]]
    }),
    OuterHarvester_E7S23: outerharvester({
        sourceId: OUTERWORLD_CONFIG.E7S23[0][0],
        targetRoomName: "E7S23",
        targetId: OUTERWORLD_CONFIG.E7S23[0][1],
        pathFinderPoint: [[32, 49]]
    }),
    OuterHarvester_E8S21: outerharvester({
        sourceId: OUTERWORLD_CONFIG.E8S21[0][0],
        targetRoomName: "E8S21",
        targetId: OUTERWORLD_CONFIG.E8S21[0][1],
        pathFinderPoint: [[32, 49]]
    }),
    OuterHarvester_E9S22_1: outerharvester({
        sourceId: OUTERWORLD_CONFIG.E9S22[0][0],
        targetRoomName: "E9S22",
        targetId: OUTERWORLD_CONFIG.E9S22[0][1],
        pathFinderPoint: [[32, 49]]
    }),
    OuterHarvester_E9S22_2: outerharvester({
        sourceId: OUTERWORLD_CONFIG.E9S22[1][0],
        targetRoomName: "E9S22",
        targetId: OUTERWORLD_CONFIG.E9S22[1][1],
        pathFinderPoint: [[32, 49]]
    }),
    // OuterHarvester_E9S24: outerharvester({
    //     sourceId: OUTERWORLD_CONFIG.E9S24[0][0],
    //     targetRoomName: "E9S24",
    //     targetId: OUTERWORLD_CONFIG.E9S24[0][1],
    //     pathFinderPoint: [[32, 49]]
    // }),

    /**
     *   OuterBuilder配置文件
     *      参数：
     *          sourceId:默认取能建筑
     *          targetRoomName:所要去的房间名称
     *          pathFinderPoint:辅助寻路点位，尚在开发功能
     */
    OuterBuilder_E6S22_1: outbuilder({sourceId: CONFIG.STORAGE.E6S22, targetRoomName: "E5S22"}),
    // OuterBuilder_E6S22_2: outbuilder({sourceId: CONFIG.STORAGE.E6S22, targetRoomName: "E5S21"}),
    // OuterBuilder_E6S22_3: outbuilder({sourceId: CONFIG.STORAGE.E6S22, targetRoomName: "E5S21"}),
    // OuterBuilder_E6S22_4: outbuilder({sourceId: CONFIG.STORAGE.E6S22, targetRoomName: "E5S21"}),
    //OuterBuilder_E9S21_1: outbuilder({sourceId: CONFIG.STORAGE.E9S21, targetRoomName: "E9S24"}),
    //OuterBuilder_E8S23_1: outbuilder({sourceId: CONFIG.STORAGE.E8S23, targetRoomName: "E9S24"}),

    /**
     *   OuterMover配置文件
     *      参数：
     *          sourceId:默认取能建筑
     *          targetRoomName:所要去的外矿房间名称
     *          targetId:能量存储目标建筑
     */
    OuterMover_E5S21_1: outmover({
        sourceId: OUTERWORLD_CONFIG.E5S21[0][1],
        targetRoomName: "E5S21",
        targetId: CONFIG.STORAGE.E6S22
    }),
    OuterMover_E5S21_2: outmover({
        sourceId: OUTERWORLD_CONFIG.E5S21[1][1],
        targetRoomName: "E5S21",
        targetId: CONFIG.STORAGE.E6S22
    }),
    OuterMover_E5S22: outmover({
        sourceId: OUTERWORLD_CONFIG.E5S22[0][1],
        targetRoomName: "E5S22",
        targetId: CONFIG.STORAGE.E6S22
    }),
    OuterMover_E6S23: outmover({
        sourceId: OUTERWORLD_CONFIG.E6S23[0][1],
        targetRoomName: "E6S23",
        targetId: CONFIG.STORAGE.E6S22
    }),
    OuterMover_E9S23_1: outmover({
        sourceId: OUTERWORLD_CONFIG.E9S23[0][1],
        targetRoomName: "E9S23",
        targetId: CONFIG.STORAGE.E8S23
    }),
    OuterMover_E9S23_2: outmover({
        sourceId: OUTERWORLD_CONFIG.E9S23[1][1],
        targetRoomName: "E9S23",
        targetId: CONFIG.STORAGE.E8S23
    }),
    OuterMover_E8S24: outmover({
        sourceId: OUTERWORLD_CONFIG.E8S24[0][1],
        targetRoomName: "E8S24",
        targetId: CONFIG.STORAGE.E8S23
    }),
    // OuterMover_E9S24: outmover({
    //     sourceId: OUTERWORLD_CONFIG.E9S24[0][1],
    //     targetRoomName: "E9S24",
    //     targetId: CONFIG.STORAGE.E8S23
    // }),
    OuterMover_E7S23: outmover({
        sourceId: OUTERWORLD_CONFIG.E7S23[0][1],
        targetRoomName: "E7S23",
        targetId: CONFIG.STORAGE.E8S23
    }),
    OuterMover_E8S21: outmover({
        sourceId: OUTERWORLD_CONFIG.E8S21[0][1],
        targetRoomName: "E8S21",
        targetId: CONFIG.STORAGE.E9S21
    }),
    OuterMover_E9S22_1: outmover({
        sourceId: OUTERWORLD_CONFIG.E9S22[0][1],
        targetRoomName: "E9S22",
        targetId: CONFIG.STORAGE.E9S21
    }),
    OuterMover_E9S22_2: outmover({
        sourceId: OUTERWORLD_CONFIG.E9S22[1][1],
        targetRoomName: "E9S22",
        targetId: CONFIG.STORAGE.E9S21
    }),

    /**
     *   Tank配置文件
     *      参数：
     *          safeRoomName:躲避伤害的房间名
     *          targetRoomName:所要去挨揍的房间名称
     *          pathFinderPoint:辅助寻路点位，pathFinderPoint[0][n]是安全房的坐标，pathFinderPoint[1][n]是挨揍房的坐标
     */
    // Tank_01: tank({
    //     safeRoomName: 'E7S20',
    //     targetRoomName: "E7S21",
    //     pathFinderPoint: [[12, 48], [13, 2]]
    // }),

    /**
     *   Colonist配置文件
     *      参数：
     *          targetRoomName:所要去占领的房间名称
     */
    //Colonist: colonist({ targetRoomName: "E5S21",transferRoom: "E5S21"}),

    /**
     *   Miner配置文件
     *      参数：
     *          sourceId:矿物采集点
     *          targetId:默认矿物储存点，如果为空则会自动设置为当前房间的Storage
     *          backUpTargetId:备用能量储存点，一般为Storage，初期可不填写
     */
    Miner_01: miner,
    Miner_02: miner,
    Miner_03: miner,
    Miner_04: miner,

    SpecialMover_E9S21: specialMover({
        sourceId: CONFIG.STORAGE.E9S21,
        targetRoomName: "E9S21",
        targetId: CONFIG.TERMINAL.E9S21,
        resourceType: RESOURCE_ENERGY,
        targetAmount: 120000
    }),
    // SpecialMover_E6S22: specialMover({
    //     sourceId: CONFIG.FACTORY.E6S22,
    //     targetRoomName: "E6S22",
    //     targetId: CONFIG.TERMINAL.E6S22,
    //     resourceType: RESOURCE_BATTERY,
    //     targetAmount: 2000000
    // }),
    // SpecialMover_E8S23: specialMover({
    //     sourceId: "5eb0822b0ae7b647e5b31eac",
    //     targetRoomName: "E8S25",
    //     targetId: CONFIG.STORAGE.E8S23,
    //     resourceType: RESOURCE_LEMERGIUM
    // }),
    SpecialMover_E8S23_1: specialMover({
        sourceId: CONFIG.STORAGE.E8S23,
        targetRoomName: "E8S23",
        targetId: CONFIG.FACTORY.E8S23,
        resourceType: RESOURCE_ENERGY,
        targetAmount: 10000
    }),

    //RemoteUpgrader: remoteupgrader({sourceId: CONFIG.STORAGE.E6S22, targetRoomName: "E5S21"}),
    //RemoteUpgrader_E8S25_1: remoteupgrader({sourceId: CONFIG.STORAGE.E8S23, targetRoomName: "E8S25"}),

    //RemoteHarvester_E8S23: remoteHarvester({targetRoomName: "E8S23"}),
    //RemoteHarvester_E8S25: remoteHarvester({targetRoomName: "E8S25"}),

}