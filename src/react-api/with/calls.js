// Copyright 2017-2019 @polkadot/react-api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import withCall from './call';

export default function withCalls(...calls) {
  return Component => {
    // NOTE: Order is reversed so it makes sense in the props, i.e. component
    // after something can use the value of the preceding version
    return calls
      .filter(t => t)
      .reverse()
      .reduce((Component, call) => {
        return Array.isArray(call)
          ? withCall(...call)(Component)
          : withCall(call)(Component);
      }, Component);
  };
}
