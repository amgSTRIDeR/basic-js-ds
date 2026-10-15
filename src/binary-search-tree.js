const { NotImplementedError } = require('../lib');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  tree = null;

  root() {
    return this.tree;
  }

  add(data) {
    if(this.tree === null) {
      this.tree = {
        data: data,
        left: new BinarySearchTree(),
        right: new BinarySearchTree()
      }
      return;
    }

    if(data < this.tree.data) {
      this.tree.left.add(data);
    } else {
      this.tree.right.add(data);
    }

  }

  find(data) {
    if(this.tree === null) {
      return null;
    }

    if(this.tree.data === data) {
      return this.tree;
    }

    if (data < this.tree.data) {
      return this.tree.left.find(data);
    } else {
      return this.tree.right.find(data);
    }
  }

  has(data) {
    if(this.tree === null || this.tree.data === null) {
      return false;
    }

    if(this.tree.data === data) {
      return true;
    }

    if(data < this.tree.data) {
      return this.tree.left.has(data);
    } else {
      return this.tree.right.has(data);
    }
  }

  remove(data) {
    if (this.tree === null) {
      return null;
    }

    if (this.tree.data === data) {
      const hasLeft = this.tree.left.tree !== null;
      const hasRight = this.tree.right.tree !== null;

      if (!hasLeft && !hasRight) {
        this.tree = null;
      }

      else if (!hasLeft) {
        this.tree = this.tree.right.tree;
      }

      else if (!hasRight) {
        this.tree = this.tree.left.tree;
      }

      else {
        let min = this.tree.right;

        while (min.tree.left.tree !== null) {
          min = min.tree.left;
        }

        this.tree.data = min.tree.data;
        this.tree.right.remove(min.tree.data);
      }

    } else if (data < this.tree.data) {
      this.tree.left.remove(data);
    } else {
      this.tree.right.remove(data);
    }
  }

  min() {
    if(this.tree?.data === null) {
      return null;
    }

    if(this.tree?.left) {
      return this.tree.left?.min() || this.tree.data;
    } else {
      return this.tree?.data;
    }
  }

  max() {
    if(this.tree?.data === null) {
      return null;
    }

    if(this.tree?.right) {
      return this.tree.right?.max() || this.tree.data;
    } else {
      return this.tree?.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};
