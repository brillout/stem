export { assert }

function assert(condition: unknown, debugInfo?: string): asserts condition {
  if (condition) {
    return
  }
  throw new Error(['Assertion Fail.', debugInfo].filter(Boolean).join(' '))
}
