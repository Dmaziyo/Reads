import { describe, expect, it } from 'vitest';
import Veu from "../index";

const data = {
  name:'小米',
  age:20
}

describe('Veu', () => {
  it('access data from this', async () => {
    const vm = new Veu({data});
    expect(vm.name).toBe('小米');
    expect(vm.age).toBe(20);
  });
  it('set data', async () => {
    const vm = new Veu({data});
    vm.name = '小明';
    vm.age = 21;
    expect(vm.name).toBe('小明');
    expect(vm.age).toBe(21);
  });
});
