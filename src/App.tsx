import * as React from 'react'
import '@/css/App.css'
import Dashboard from '@/components/dashboard'
import Loader from '@/components/loader'
import useStore from '@/store';
import FilterSearch from '@/components/filterSearch';

useStore.getState().fetchTableData()
function App() {
    const isLoading = useStore(({loading}) => loading)
    
    return (
        <>
            <FilterSearch/>
            { isLoading ?
                    <Loader/> :
                    <Dashboard/>
            }
        </>
      )
}

export default App
