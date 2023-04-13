const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.nodeRoot = null;
  }

  root() {
    return this.nodeRoot;
  }

  add(data) {
    let nodeChild = new Node(data);

    if (this.nodeRoot === null) {
      this.nodeRoot = nodeChild;
    } else {
      this.addNode(this.nodeRoot, nodeChild);
    }
  }

  addNode(node, nodeChild) {
    if (nodeChild.data < node.data) {
      if (node.left === null) {
        node.left = nodeChild;
      } else {
        this.addNode(node.left, nodeChild);
      }
    }

    else {
      if (node.right === null) {
        node.right = nodeChild;
      } else {
        this.addNode(node.right, nodeChild);
      }
    }
  }


  has(data) {
    if (this.find(data)) {
      return true;
    }
    return false;
  }

  find(data) {
    if (!this.nodeRoot) {
      return null;
    }

    let nodeCurrent = this.nodeRoot;

    while (true) {
      switch (true) {
        case (!nodeCurrent):
          return null;
        case (data === nodeCurrent.data):
          return nodeCurrent;
        case (data < nodeCurrent.data):
          nodeCurrent = nodeCurrent.left;
          break;
        case (data > nodeCurrent.data):
          nodeCurrent = nodeCurrent.right;
          break;
      }
    }
  }

  remove(data) {
    this.nodeRoot = this.removeNode(this.nodeRoot, data);
  }

  removeNode(nodeCurrent, data) {
    if (nodeCurrent === null) {
      return null;
    } else if (data < nodeCurrent.data) {
      nodeCurrent.left = this.removeNode(nodeCurrent.left, data);
      return nodeCurrent;
    } else if (data > nodeCurrent.data) {
      nodeCurrent.right = this.removeNode(nodeCurrent.right, data);
      return nodeCurrent;
    } else {
      if (nodeCurrent.left === null && nodeCurrent.right === null) {
        nodeCurrent = null;
        return nodeCurrent;
      }

      if (nodeCurrent.left === null) {
        nodeCurrent = nodeCurrent.right;
        return nodeCurrent;
      } else if (nodeCurrent.right === null) {
        nodeCurrent = nodeCurrent.left;
        return nodeCurrent;
      }

      let temp = this.minNode(nodeCurrent.right);
      nodeCurrent.data = temp.data;
      nodeCurrent.right = this.removeNode(nodeCurrent.right, temp.data);

      return nodeCurrent;
    }
  }

  minNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.minNode(node.left);
    }
  }

  min() {
    if (!this.nodeRoot) {
      return null;
    }

    let nodeCurrent = this.nodeRoot;

    while (nodeCurrent.left) {
      nodeCurrent = nodeCurrent.left;
    }

    return nodeCurrent.data;
  }

  max() {
    if (!this.nodeRoot) {
      return null;
    }

    let nodeCurrent = this.nodeRoot;

    while (nodeCurrent.right) {
      nodeCurrent = nodeCurrent.right;
    }

    return nodeCurrent.data;
  }
}

module.exports = {
  BinarySearchTree
};