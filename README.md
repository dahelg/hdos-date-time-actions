# hdos-date-time-actions

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

`hdos-date-time-actions` is a JavaScript library designed to give developers a simple solution to control DOM actions based on date and time. By using class names or data attributes, developers can easily manage the visibility and behavior of any HTML element on their page. The library supports a variety of actions such as "hide", "show", "remove", "add", "animate", and even side-effects like "fetch" new data, making it versatile for a wide range of applications.

## Development Status

This project is currently in development. Features and documentation are actively being added and improved. Please note that some functionalities might change before the final release.

## Installation

The library is not yet published to npm. Until a first release is
available, you can install it directly from the repository:

``` bash
git clone https://github.com/dahelg/hdos-date-time-actions.git
cd hdos-date-time-actions
pnpm install
pnpm run build
```

The compiled output (including type declarations) is written to `dist/`.

## Usage

The public API is still minimal while the library is under active
development. The current entry point exposes an initialization function:

``` typescript
import { initDateTimeActions } from "hdos-date-time-actions";

initDateTimeActions();
```

The intended usage pattern is driven by class names on HTML elements.
For example, an element can declare when it should be hidden using a
class of the format `hide-after-YYYY-MM-DD-HH-MM`:

``` html
<div class="hide-after-2024-03-10-17-58">
  This div will be hidden after March 10th, 2024, 17:58 local time.
</div>
```

A standalone demonstration of this pattern (without the library) can be
found in `src/examples/Example-01-Initial-Use-Case-Demonstration.html`.
Further actions such as "show", "remove", "add", "animate" and "fetch"
are planned but not implemented yet.

## Contributing

I welcome contributions to `hdos-date-time-actions`! If you're interested in helping improve the library, please read our contributing guidelines. (TODO: Add a link to contributing guidelines)

### Installation for Development

Install pnpm if you haven't already by following the instructions on the [pnpm website](https://pnpm.io/installation). In most cases, this can be done globally via npm:

``` bash
npm install -g pnpm
```

Then, install the package. Normally, it should also automaticially fetch and install the correct version specified in the `.npmrc` file.

``` bash
pnpm i
```

## License

`hdos-date-time-actions` is available under the MIT License. See the LICENSE file for more info. (TODO: Ensure you have a LICENSE file in your repository)
