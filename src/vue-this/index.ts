function proxy(target: any, key: string, data: any) {
  let value = data[key];
  const sharedPropertyDefinition = {
    get: function proxyGetter() {
      return value;
    },
    set: function proxySetter(val: any) {
      value = val;
    }
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
interface VeuOptions {
  data: Record<string, any>
}

interface VeuConstructor {
  new (options: VeuOptions): Record<string, any>;
}

function Veu(options: VeuOptions) {
   const data = options.data;
   for (const key in data) {
    proxy(this, key, data);
   }
}

export default Veu as unknown as VeuConstructor;
