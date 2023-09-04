import React from 'react';
import { AppUI } from './AppUI'
import { ContextProvider } from '../context';

function App() {
    return (
        <ContextProvider>
            <AppUI />
        </ContextProvider>
    )
}

export default App;