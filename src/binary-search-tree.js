const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }
    root() {
        return this.rootNode;
    }
    add(data) {
        this.rootNode = addWithin(this.rootNode, data);

        function addWithin(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (node.data === data) {
                return node
            } else if (data < node.data) {
                node.left = addWithin(node.left, data);
            } else if (data > node.data) {
                node.right = addWithin(node.right, data);
            }
            return node;

        }
    }

    has(data) {
        return searchWithin(this.rootNode, data);

        function searchWithin(node, data) {
            if (!node) {
                return false;
            }
            if (data === node.data) {
                return true;
            } else if (data < node.data) {
                return searchWithin(node.left, data)
            } else if (data > node.data) {
                return searchWithin(node.right, data);
            }
        }
    }

    find(data) {
        let current = this.rootNode;

        while (true) {
            if (!current) return null;
            if (data === current.data) {
                return current
            } else if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            }
        }
    }

    remove(data) {
        this.rootNode = removeNode(this.rootNode, data);

        function removeNode(node, data) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }
            }

            if (!node.left) {
                node = node.right;
                return node;
            }

            if (!node.right) {
                node = node.left;
                return node;
            }

            let minFromRight = node.right;
            while (minFromRight.left) {
                minFromRight = minFromRight.left;
            }
            node.data = minFromRight.data;

            node.right = removeNode(node.right, minFromRight.data);

            return node;
        }
    }

    min() {
        if (!this.rootNode) {
            return;
        }

        let node = this.rootNode;
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    max() {
        if (!this.rootNode) {
            return;
        }

        let node = this.rootNode;
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }
}

const tree = new BinarySearchTree();
// tree.add(5);
// // tree.add(5);
// tree.add(10);
// tree.add(2);
// tree.add(15);
// console.log(tree.rootNode);

module.exports = {
    BinarySearchTree
};