# use-network-info

> Useful information about local client network like public ip and Reverse DNS

[![NPM](https://img.shields.io/npm/v/use-network-info.svg)](https://www.npmjs.com/package/use-network-info) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-network-info
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-network-info'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [brigolini](https://github.com/brigolini)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
