import BaseManager from "./base.manager.js";

class IntervalManager extends BaseManager {
    constructor() {
      if(IntervalManager.instance) {
        return IntervalManager.instance;
      }
      super();
      this.intervals = new Map();
      IntervalManager.instance = this;
    }
  
    // 플레이어 핑 전용 Interval
    addPingInterval(playerId, callback, interval, type = "user") {
      if (!this.intervals.has(playerId)) this.intervals.set(playerId, new Map());
  
      this.intervals.get(playerId).set(type, setInterval(callback, interval));
    }
  
    // 게임 플레이어들 전용 Interval
    addPlayersInterval(gameId, callback, interval, type = "users") {
        if (!this.intervals.has(gameId)) this.intervals.set(gameId, new Map());
  
      this.intervals.get(gameId).set(type, setInterval(callback, interval));
    }

    // 게임 귀신들 전용 Interval
    addGhostsInterval(gameId, callback, interval, type = "ghosts") {
        if (!this.intervals.has(gameId)) this.intervals.set(gameId, new Map());
  
        this.intervals.get(gameId).set(type, setInterval(callback, interval));
    }

    // 게임 모니터링 전용 Interval
    addGameMonitorInterval(gameId, callback, interval, type = "monitor") {
        if (!this.intervals.has(gameId)) this.intervals.set(gameId, new Map());
  
      this.intervals.get(gameId).set(type, setInterval(callback, interval));
    }
  
    removePingInterval(playerId) {
      if (this.intervals.has(playerId)) {
        const userIntervals = this.intervals.get(playerId);
        userIntervals.forEach((intervalId) => {
          clearInterval(intervalId);
        });
        this.intervals.delete(playerId);
      }
    }
  
    removeMonsterTypeInterval(gameId) {
      if (this.intervals.has(gameId)) {
        const gameMonitorInterval = this.intervals.get(gameId);
        clearInterval(gameMonitorInterval.get("monsterType"));
        this.intervals.delete(gameId);
      }
    }
  
    removeInterval(playerId, type) {
      if (this.intervals.has(playerId)) {
        const userIntervals = this.intervals.get(playerId);
        if (userIntervals.has(type)) {
          clearInterval(userIntervals.get(type));
          userIntervals.delete(type);
        }
      }
    }
  
    clearAll() {
      this.intervals.forEach((userIntervals) => {
        userIntervals.forEach((intervalId) => {
          clearInterval(intervalId);
        });
      });
  
      this.intervals.clear();
    }
  }

  const intervalManager = new IntervalManager();
  
  export default intervalManager;
  