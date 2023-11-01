import {describe, expect, test} from '@jest/globals';
import { hello, LinkedList } from './linked-list'

describe('hello world of test', () => {
  test('tests if default return is hello', () => {
    expect(hello()).toBe('hello');
  });
});

describe('Linked List toString', () => {
  test('list with a single element', () => {
    const list = new LinkedList(1)
    expect(list.toString()).toBe('LinkedList<1>');
  });

  test('list with two elements', () => {
    const list = new LinkedList(1, 2)
    expect(list.toString()).toBe('LinkedList<1>->LinkedList<2>');
  });
});