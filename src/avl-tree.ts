export class AVLTreeNode<T> {
  public left: AVLTreeNode<T> | null = null;
  public right: AVLTreeNode<T> | null = null;
  public height: number = 1;

  constructor(public value: T) {}
}

export class AVLTree<T> {
  private root: AVLTreeNode<T> | null = null;

  public insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(node: AVLTreeNode<T> | null, value: T): AVLTreeNode<T> {
    if (node === null) {
      return new AVLTreeNode(value);
    }
    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in the AVL tree
      return node;
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    return this.balance(node);
  }

  private getHeight(node: AVLTreeNode<T> | null): number {
    return node ? node.height : 0;
  }

  private getBalance(node: AVLTreeNode<T>): number {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  private balance(node: AVLTreeNode<T>): AVLTreeNode<T> {
    const balanceFactor = this.getBalance(node);

    if (balanceFactor > 1) {
      if (this.getBalance(node.left!) < 0) {
        node.left = this.rotateLeft(node.left!);
      }
      return this.rotateRight(node);
    }

    if (balanceFactor < -1) {
      if (this.getBalance(node.right!) > 0) {
        node.right = this.rotateRight(node.right!);
      }
      return this.rotateLeft(node);
    }

    return node;
  }

  private rotateLeft(z: AVLTreeNode<T>): AVLTreeNode<T> {
    const y = z.right!;
    z.right = y.left;
    y.left = z;
    z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    return y;
  }

  private rotateRight(z: AVLTreeNode<T>): AVLTreeNode<T> {
    const y = z.left!;
    z.left = y.right;
    y.right = z;
    z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    return y;
  }

  public inOrderTraversal(): T[] {
    const result: T[] = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }

  private inOrderTraversalNode(node: AVLTreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this.inOrderTraversalNode(node.right, result);
    }
  }

  public search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: AVLTreeNode<T> | null, value: T): boolean {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  public remove(value: T): void {
    this.root = this.removeNode(this.root, value);
  }

  private removeNode(
    node: AVLTreeNode<T> | null,
    value: T
  ): AVLTreeNode<T> | null {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      if (node.left === null || node.right === null) {
        node = node.left ? node.left : node.right;
      } else {
        const temp = this.findMinNode(node.right);
        node.value = temp.value;
        node.right = this.removeNode(node.right, temp.value);
      }
    }

    if (node === null) {
      return node;
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    return this.balance(node);
  }

  private findMinNode(node: AVLTreeNode<T>): AVLTreeNode<T> {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}
