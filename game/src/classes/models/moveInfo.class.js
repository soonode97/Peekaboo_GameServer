export class Position {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  updatePosition(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getPosition() {
    return {
      position_x: this.x,
      position_y: this.y,
      position_z: this.z,
    };
  }
}

export class Rotation {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  updateRotation(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getRotation() {
    return {
      rotation_x: this.x,
      rotation_y: this.y,
      rotation_z: this.z,
    };
  }
}
