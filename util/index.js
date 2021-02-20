export function def(object, key, value) {
  Object.defineProperty(object, key, {
    enumerable: true,
    writable: true,
    configurable: true,
    value,
  });
}
