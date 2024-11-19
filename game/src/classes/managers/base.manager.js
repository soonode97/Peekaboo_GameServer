class BaseManager {
    constructor() {
      if (new.target === BaseManager) {
        throw new TypeError('Cannot construct MaseManager intstances');
      }
    }
  }
  
  export default BaseManager;
  