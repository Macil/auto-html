## 2.0.0 (2025-06-03)

### Breaking changes

- The default export has been removed. Use a named export instead:

  ```js
  import { autoHtml } from "auto-html";
  ```

- Removed Flow type definitions. Type definitions are now provided only for TypeScript.

### Other changes

- The library is now properly compatible with Deno and Typescript in module:node16 mode.

## 1.2.0 (2018-09-25)

- Added [TypeScript](https://www.typescriptlang.org/) type definitions.

## 1.1.0 (2016-09-19)

- Added [Flow](https://flow.org/) type definitions.
- Updated to Lodash v4.

## 1.0.4 (2015-08-12)

- Fixed html object with empty string not being supported.

## 1.0.3 (2015-05-06)

- Cast unsupported input types to strings.

## 1.0.1 (2015-04-29)

- Import 'lodash/escape' directly for smaller bundle sizes.

## 1.0.0 (2015-04-29)

Initial release.
