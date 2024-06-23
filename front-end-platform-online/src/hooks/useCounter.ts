import { useState } from 'react';

export const useCounter = ( initialCount: number = 0 ) => {
  
    const [ count, setCount ] = useState<number>( initialCount );

    const increment = (): void => {
        setCount(count + 1);
    };

    const decrement = (): void => {
        setCount(count - 1);
    };

    return {
        count,
        increment,
        decrement
    }

}
