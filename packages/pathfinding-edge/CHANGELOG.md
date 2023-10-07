# @vue-flow/pathfinding-edge

## 2.0.0-next.0

### Patch Changes

- Updated dependencies [[`c89190cc`](https://github.com/bcakmakoglu/vue-flow/commit/c89190cc1cc690db1b0a97e8c195464b21c3226f), [`8e4ef50c`](https://github.com/bcakmakoglu/vue-flow/commit/8e4ef50c21a7c21ce9e0bf786b0d9457faeea616), [`fccea178`](https://github.com/bcakmakoglu/vue-flow/commit/fccea178688550ee95044266079604227fd0ef6f)]:
  - @vue-flow/core@2.0.0-next.0

## 1.0.6

### Patch Changes

- [#865](https://github.com/bcakmakoglu/vue-flow/pull/865) [`9ce7bdc4`](https://github.com/bcakmakoglu/vue-flow/commit/9ce7bdc4908dda4dea299e5f469b252ac20a12ab) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `exports` field to package.json

## 1.0.5

### Patch Changes

- [#770](https://github.com/bcakmakoglu/vue-flow/pull/770) [`baaabbe8`](https://github.com/bcakmakoglu/vue-flow/commit/baaabbe8e5cd88c9976033bca33119b1bc7a4d57) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix wrong package entries in `package.json` for pathfinding edge

## 1.0.4

### Patch Changes

- [#716](https://github.com/bcakmakoglu/vue-flow/pull/716) [`1685827d`](https://github.com/bcakmakoglu/vue-flow/commit/1685827d0ea1dc9864f95a1b3a54fbc43a296e5d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix umd pkg names and use the correct vue flow core umd pkg name in plugins

## 1.0.3

### Patch Changes

- [#682](https://github.com/bcakmakoglu/vue-flow/pull/682) [`b08cb4d4`](https://github.com/bcakmakoglu/vue-flow/commit/b08cb4d45904c229d9ecda5e3cb477cbb7a6acaf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add compat mode to components to avoid breaking when used with @vue/compat

## 1.0.2

### Patch Changes

- [#616](https://github.com/bcakmakoglu/vue-flow/pull/616) [`b16e3564`](https://github.com/bcakmakoglu/vue-flow/commit/b16e3564708c5429ad594156341fa3e95f84d3b2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Upgrade to vite 4 & update deps

## 1.0.1

### Patch Changes

- [#365](https://github.com/bcakmakoglu/vue-flow/pull/365) [`009bbdb`](https://github.com/bcakmakoglu/vue-flow/commit/009bbdba6d7e896bcfcaf8f07e7fdc8a83cc52fc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix output file names for resize-rotate-node and pathfinding-edge pkgs

## 1.0.0

### Major Changes

- [#305](https://github.com/bcakmakoglu/vue-flow/pull/305) [`939bff50`](https://github.com/bcakmakoglu/vue-flow/commit/939bff503039af3b790160640548ddde984cf2bc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Simplify edge path calculations
    - remove `getEdgeCenter` and `getSimpleEdgeCenter`

  # Breaking Changes

  - `getEdgeCenter` has been removed
    - Edge center positions can now be accessed from `getBezierPath` or `getSmoothStepPath` functions

  Before:

  ```js
  import { getBezierPath, getEdgeCenter } from "@braks/vue-flow";

  // used to return the path string only
  const edgePath = computed(() => getBezierPath(pathParams));

  // was necessary to get the centerX, centerY of an edge
  const centered = computed(() => getEdgeCenter(centerParams));
  ```

  After:

  ```js
  import { getBezierPath } from "@vue-flow/core";

  // returns the path string and the center positions
  const [path, centerX, centerY] = computed(() => getBezierPath(pathParams));
  ```

- [#305](https://github.com/bcakmakoglu/vue-flow/pull/305) [`47d837aa`](https://github.com/bcakmakoglu/vue-flow/commit/47d837aac096e59e7f55213990dff2cc7eba0c01) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Change pkg scope from 'braks' to 'vue-flow'
    - Add `@vue-flow/core` package
    - Add `@vue-flow/additional-components` package
    - Add `@vue-flow/pathfinding-edge` package
    - Add `@vue-flow/resize-rotate-node` package

  # Features

  - `useNode` and `useEdge` composables
    - can be used to access current node/edge (or by id) and their respective element refs (if used inside the elements' context, i.e. a custom node/edge)
  - `selectionKeyCode` as `true`
    - allows for figma style selection (i.e. create a selection rect without holding shift or any other key)
  - Handles to trigger handle bounds calculation on mount
    - if no handle bounds are found, a Handle will try to calculate its bounds on mount
    - should remove the need for `updateNodeInternals` on dynamic handles
  - Testing for various features using Cypress 10

  # Bugfixes

  - Fix `removeSelectedEdges` and `removeSelectedNodes` actions not properly removing elements from store

  # Breaking Changes

  - `@vue-flow/core` package is now required to use vue-flow
  - `@vue-flow/additional-components` package contains `Background`, `MiniMap` and `Controls` components and related types
    - When switching to the new pkg scope, you need to change the import path.

  Before:

  ```js
  import { VueFlow, Background, MiniMap, Controls } from "@braks/vue-flow";
  ```

  After

  ```js
  import { VueFlow } from "@vue-flow/core";
  import {
    Background,
    MiniMap,
    Controls,
  } from "@vue-flow/additional-components";
  ```

### Patch Changes

- Updated dependencies [[`939bff50`](https://github.com/bcakmakoglu/vue-flow/commit/939bff503039af3b790160640548ddde984cf2bc), [`47d837aa`](https://github.com/bcakmakoglu/vue-flow/commit/47d837aac096e59e7f55213990dff2cc7eba0c01)]:
  - @vue-flow/core@1.0.0
