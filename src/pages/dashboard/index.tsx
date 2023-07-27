import * as React from 'react';
import useStore from '@/store';
import Loader from '@/components/loader';
import TableComponent from '@/components/tableComponent';

const Dashboard: React.FC = () => {
    const isLoading = useStore(({loading}) => loading)
    
    return (
    <>
        { isLoading ?
            <Loader/> :
            <TableComponent/>
        }
    </>
    )
}


export default Dashboard;
