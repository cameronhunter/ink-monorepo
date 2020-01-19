import React from 'react';
import { render, Text } from 'ink';
import useStdoutDimensions from '../src/index';

function Application() {
  const [columns, rows] = useStdoutDimensions();
  return (
    <Text>
      {columns}×{rows}
    </Text>
  );
}

const { unmount } = render(<Application />);

setTimeout(() => unmount(), 30_000);
