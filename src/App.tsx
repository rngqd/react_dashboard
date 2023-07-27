import '@/css/App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import useStore from '@/store';

import Dashboard from '@/pages/dashboard'
import About from '@/pages/about';

useStore.getState().fetchTableData()

function App() {
    const { selectedNews } = useStore()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Dashboard/>} />
                <Route path="/about" element={ !selectedNews ? <Navigate to="/" replace /> : <About/>} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
