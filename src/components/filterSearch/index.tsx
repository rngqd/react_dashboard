import * as React from 'react';
import { useState } from 'react';
import { Input, Button } from 'antd';
import useStore from '@/store';
import style from './index.module.css'

const FilterSearch: React.FC = () => {
    const {  setSearchWord, filterTableData } = useStore()
    const [inputValue, setInputValue] = useState('')
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value ==='') {
            setSearchWord('')
        }
        
        setInputValue(e.target.value)
    }
    
    const onSearch = () => {
        setSearchWord(inputValue);
        filterTableData()
    }
    
    return (
        <div className={style['filter-search']}>
            <Input
                placeholder='Поиск по заголовкам'
                onChange={onChange}
                value={inputValue}
                allowClear
            />
            <Button className={style['filter-search__btn']}
                    onClick={onSearch}>
                Поиск
            </Button>
        </div>
    )
}

export default FilterSearch;
