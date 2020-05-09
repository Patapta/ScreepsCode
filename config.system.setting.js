module.exports = {
    //是否允许建筑工从指定建筑之外提取能量来进行建造
    ALLOW_BUILDE_FROM_SE: true,
    //是否允许搬运工将多余能量存储进 STORAGE/CONTAINER （如有 STORAGE 请谨慎打开）
    ALLOW_MOVER_STORAGE: false,
    //允许制造Creep的最大能量消耗值
    MAX_CREEP_ENERGY_CONSUM: 1500,
    //默认基地名称
    SPAWN_NAME: "Home",
    //日志输出等级
    LOGGER_LEVEL: "INFO",
    //是否打开GUI调试
    GUIDEBUGMODE: false,
    //房间可用能量高于多少时允许向Upgrader分配能量
    ALLOW_UPGRADER_USE_ENERGY: 0.3,
    //能量报警界限
    ENERGY_ALERT_NUM: 0.5,
    //Tower剩余多少能量时允许Mover加进来
    TOWER_ENERGY_NEED: 0.8
}