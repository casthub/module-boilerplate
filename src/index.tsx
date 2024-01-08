import { useState } from 'react';

import { useComponents, type Module } from '@casthub/runtime';

import { cn } from './helpers';

import './globals.css';

const DebugModule: Module = ({ id }) => {
  const { Button } = useComponents();

  const [count, setCount] = useState(0);

  return (
    <div className="module">
      <h1 className={cn('text-lg font-extrabold', count % 2 === 0 && 'text-red-500')}>TODO: Count {count}</h1>
      <p>This Module&apos;s ID is {id}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export default DebugModule;
