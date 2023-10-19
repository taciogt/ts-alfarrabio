import {describe, expect, test} from '@jest/globals';
import { hello } from './linked-list'

describe('hello world of test', () => {
  test('tests if default return is hello', () => {
    expect(hello()).toBe('hello');
  });
});