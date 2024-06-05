export class Stack<T> {
  private items: T[] = [];

  place(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.shift();
  }

  top(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}
