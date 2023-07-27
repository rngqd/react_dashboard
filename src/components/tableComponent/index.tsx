import * as React from 'react';
import { Button, Input, Table } from 'antd';
import { IColumns, ITableData } from '@/models';
import useStore from '@/store';
import { compareDates, convertISODate } from '@/utils/functions';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ModalComponent from '@/components/modalComponent';
import FilterSearch from '@/components/filterSearch';

import type { ColumnsType } from 'antd/es/table';

import style from './index.module.css'

const TableComponent: React.FC = () => {
    const { searchQuery, filterData, setSelectedNews } = useStore()
    
    const tableData = useStore(({tableData}) => tableData)
    const [columns, setColumns] = useState([] as unknown as IColumns[])
    const [newColTitle, setNewColTitle] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const data: ITableData[] = tableData
    
    const [initialColumns, setInitialColumns] = useState([
        {
            title: 'Автор',
            dataIndex: 'author',
            key: 'author',
            hidden: false,
        },
        {
            title: 'Дата публикации',
            dataIndex: 'publishedAt',
            key: 'publishedAt',
            render: (date: string) => <span>{convertISODate(date)}</span>,
            defaultSortOrder: 'ascend',
            sorter: compareDates,
            hidden: false
        },
        {
            title: 'Заголовок',
            dataIndex: 'title',
            key: 'title',
            hidden: false,
            render: (title: string) => <div className={style['table__title']}>{title}</div>,
    
        },
        {
            title: 'Краткое содержание',
            dataIndex: 'content',
            key: 'content',
            render: (content: string) => <div className={style['table__description']}>{content}</div>,
            hidden: false
        },
        {
            title: 'Читать далее',
            dataIndex: 'key',
            key: 'key',
            render: (key: number) => <Link to='/about' onClick={()=> clickReadMore(key)}>Читать</Link>,
            hidden: false
        },
    ] as unknown as IColumns[])
    
    
    function addColumn () {
        if(newColTitle!== '') {
            const newCol = {
                title: newColTitle,
                dataIndex: newColTitle,
                key: newColTitle,
            }
            setColumns([...columns,newCol])
            setInitialColumns([...initialColumns, newCol])
            setNewColTitle('')
        }
    }
    const changeAddedTitle = (e: React.ChangeEvent<HTMLInputElement>) => setNewColTitle(e.target.value)
    
    const toggleModal = () => setIsModalOpen(!isModalOpen)
    
    const changeColumnVisibility = (colTitle: string) => {
        const index = initialColumns.findIndex(col=> col.title === colTitle)
        initialColumns[index].hidden = !initialColumns[index].hidden
        
        setColumns(initialColumns.filter(item => !item?.hidden))
    }
    
    const clickReadMore = (newsId: number) => setSelectedNews(newsId)
    
    useEffect(
        ()=> setColumns(initialColumns),
        []
    )
    
    return (
        <>
            <div className={style['table__filters']}>
                <FilterSearch/>
    
                <div className={style['table__buttons']}>
                    <Button onClick={toggleModal}>Редактировать видимость</Button>
                    <div className={style['table__add-col']}>
                        <Input placeholder='Заголовок столбца' onChange={changeAddedTitle} value={newColTitle}/>
                        <Button onClick={addColumn}>Добавить столбец</Button>
                    </div>
                </div>
            </div>
            {
                columns.length > 0 ?
                    <div className={style['table__container']}>
                        <Table<ITableData>
                            columns={columns as ColumnsType<ITableData>}
                            dataSource={!searchQuery? data: filterData}
                            pagination={false}
                        />
                    </div>:
                    <h2>Все элементы скрыты</h2>
            }
            <ModalComponent
                isOpen={isModalOpen}
                toggle={toggleModal}
                columns={initialColumns}
                changeVisibility={changeColumnVisibility}
            />
        </>
    )
}

export default TableComponent;
