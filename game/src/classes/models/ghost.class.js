import { Position, Rotation } from './moveInfo.class.js';

class Ghost {
  constructor(id, ghostTypeId, position, rotation, state) {
    this.id = id;
    this.ghostTypeId = ghostTypeId;
    this.position = new Position(
      position.position_x,
      position.position_y,
      position.position_z,
    );
    this.rotation = new Rotation(
      rotation.rotation_x,
      rotation.rotation_y,
      rotation.rotation_z,
    );
    this.state = state;
  }
}

export default Ghost;
