export const hello = () => 'hello'

export class LinkedList<T> {
  private readonly value: T
  private readonly next: LinkedList<T> | null = null

  constructor(...items: [T, ...T[]]) {
    this.value = items[0]
    if (items.length > 1) {
      this.next = new LinkedList<T>(...[items[1], ...items.slice(2)])
    }
  }

  toString(): string {
    const nextString = this.next ? `->${this.next.toString()}` : ''
    return `LinkedList<${this.value}>${nextString}`
  }
}