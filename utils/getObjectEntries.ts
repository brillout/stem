/** Same as `Object.entries` but with TypeScript support */
export { getObjectEntries }

// Copied from https://stackoverflow.com/questions/69019873/how-can-i-get-typed-object-entries-and-object-fromentries-in-typescript/69019874#69019874

type ObjectType = Record<PropertyKey, unknown>
type PickByValue<OBJ_T, VALUE_T> = Pick<
  OBJ_T,
  { [K in keyof OBJ_T]: OBJ_T[K] extends VALUE_T ? K : never }[keyof OBJ_T]
>
type ObjectEntries<OBJ_T> = { [K in keyof OBJ_T]: [keyof PickByValue<OBJ_T, OBJ_T[K]>, OBJ_T[K]] }[keyof OBJ_T][] // From https://stackoverflow.com/a/60142095

// ~~~~~~~~~~~~~~~~~~~~ Typed Function ~~~~~~~~~~~~~~~~~~~~

function getObjectEntries<OBJ_T extends ObjectType>(obj: OBJ_T): ObjectEntries<OBJ_T> {
  return Object.entries(obj) as ObjectEntries<OBJ_T>
}
