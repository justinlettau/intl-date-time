[![NPM Version](https://badge.fury.io/js/intl-date-time.svg)](https://badge.fury.io/js/intl-date-time)
[![CI](https://github.com/justinlettau/intl-date-time/workflows/CI/badge.svg)](https://github.com/justinlettau/intl-date-time/actions)
[![Dependency Status](https://david-dm.org/justinlettau/intl-date-time.svg)](https://david-dm.org/justinlettau/intl-date-time)
[![Dev Dependency Status](https://david-dm.org/justinlettau/intl-date-time/dev-status.svg)](https://david-dm.org/justinlettau/intl-date-time?type=dev)

# Intl.DateTime

A tiny wrapper around the native [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat), with predefined formats.

# Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)

# Features

- 🎉 Uses the **native** `Intl.DateTimeFormat` API.
- 🚀 **Zero dependencies**, super tiny.
- 💪 Written in **TypeScript**.

# Installation

```bash
npm install --save intl-date-time
```

# Usage

```typescript
import { format } from 'intl-date-time';

format(date, 'mediumDate');
// Aug 1, 2020

format(date, 'shortTime');
// 6:32 PM
```

Alternatively, you can get the format options for manual use.

```typescript
import { getOptions } from 'intl-date-time';

const options = getOptions('longDate');
new Intl.DateTimeFormat('en-US').format(date, options);
// August 1, 2020
```

### Formats

| Format       | Example                                    |
| ------------ | ------------------------------------------ |
| `short`      | `08/1/20, 6:32 PM`                         |
| `medium`     | `Aug 1, 2020, 6:32:21 PM`                  |
| `long`       | `August 1, 2020, 6:32:21 PM PDT`           |
| `full`       | `Saturday, August 1, 2020, 6:32:21 PM PDT` |
| `shortDate`  | `08/1/20`                                  |
| `mediumDate` | `Aug 1, 2020`                              |
| `longDate`   | `August 1, 2020`                           |
| `fullDate`   | `Saturday, August 1, 2020`                 |
| `shortTime`  | `6:32 PM`                                  |
| `mediumTime` | `6:32:21 PM`                               |
| `longTime`   | `6:32:21 PM PDT`                           |

# Development

```bash
npm install
npm run build
```
