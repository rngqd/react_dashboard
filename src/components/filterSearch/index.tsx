import * as React from 'react';
import { Input, Button } from 'antd';
import useStore from '@/store';
import style from './index.module.css'
const FilterSearch: React.FC = () => {
    const { searchQuery, setSearchWord, filterTableData } = useStore()
    
    const onChange = (e) => {
        setSearchWord(e.target.value);
        filterTableData()
    }
    const onSearch = () => {
        filterTableData()
    }
    return (
        <div className={style['filter-search']}>
            <Input
                placeholder="Поисковое слово"
                onChange={ onChange}
                value={searchQuery}
                allowClear
            />
            <Button className={style['filter-search__btn']} onClick={onSearch}>Поиск</Button>
        </div>
    )
}

export default FilterSearch;
