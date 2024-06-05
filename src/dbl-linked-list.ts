export class DblListNode<T> {
  value: T;
  next: DblListNode<T> | null = null;
  prev: DblListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class DblLinkedList<T> {
  head: DblListNode<T> | null = null;
  tail: DblListNode<T> | null = null;

  add(value: T): void {
    const newNode = new DblListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  }

  remove(value: T): boolean {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      return true;
    }

    let current: DblListNode<T> | null = this.head;
    while (current) {
      if (current.value === value) {
        if (current.prev) {
          current.prev.next = current.next;
        }
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(value: T): DblListNode<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
