# Protoc Gen Typescript

Generates appropriate Protocol Buffer sources from Proto files directly through _TypeScript Compiler API_.

This plugin generates plain **Typescript** files that can be used AMD, UMD, CommonJS module systems.

Aim of this protoc plugin is to make usage of protocol buffers easy in Javascript/Typescript by taking modern approaches.

## Example

```proto
syntax = "proto3";

message Change {
    Kind kind = 1;
    string patch = 2;
}

enum Kind {
    UPDATED = 0;
    DELETED = 1;
}
```


```typescript
// Constructed message
const change = new Change();
change.kind = Kind.UPDATED;
change.patch = "@@ -7,11 +7,15 @@"

// Sent over the wire
const bytes: Uint8Array = change.serialize();

const receivedChange: Change = Change.deserialize(bytes);

console.log(receivedChange.kind == Kind.UPDATE) // true
console.log(receivedChange.patch) // "@@ -7,11 +7,15 @@"

```


## Key Differences

This protoc plugin does generate;

- Fields as **getter** **setters**.
- Enums as **enums**
- Messages within **namespace** if the proto has **package** directive.


## Usage

### Without Bazel
```
npm install -g protoc-gen-ts

protoc -I=sourcedir --ts_out=dist myproto.proto
```
### With Bazel
```
// TODO
```

## Roadmap

- <s>Support for repeated non-integer fields</s>
- <s>Generate appropriate service code that is usable with node **grpc** package.</s>
- <s>Support for creating protocol buffer messages directly from their constructors with an object.</s>
- Support for `import` directive.


## Ideas
- Support `map<TYPE, TYPE>` types as ES `Map`.
- Make services strongly typed.
- Support for `Promise` in rpcs.