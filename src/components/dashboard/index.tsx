import * as React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ITableData } from '@/models';
import useStore from '@/store';
import { convertISODate } from '@/utils/functions';
import style from './index.module.css'
const Dashboard: React.FC = () => {
   
    const tableData = useStore(({tableData}) => tableData)
    const { searchQuery, filterData } = useStore()
    
    const columns: ColumnsType = [
        {
            title: 'Автор',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Заголовок',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Дата публикации',
            dataIndex: 'publishedAt',
            key: 'publishedAt',
            render: (date) => <span>{convertISODate(date)}</span>,
        },
        {
            title: 'Краткое содержание',
            dataIndex: 'content',
            key: 'content',
            render: (content) => <div className={style['table__description']}>{content}</div>,
        },
        {
            title: 'Читать дальше',
            dataIndex: 'description',
            key: 'description',
            render: () => <button>Подробнее</button>,
        },
    ];
    
    const data: ITableData[] = tableData
return (
    <>
        <Table
            columns={columns}
            dataSource={!searchQuery? data: filterData}
        />
    </>
    )
}


export default Dashboard;
