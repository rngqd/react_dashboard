import { create } from 'zustand'
import axios from 'axios'
import { IState, IFetchResult } from '@/models';
import { API_URL, API_KEY } from '@/utils/constants';

const useStore = create<IState>((set, get)=> ({
    tableData: [],
        filterData: [],
    loading: false,
    hasError: false,
    currentPage: 1,
    pageSize: 10,
    pagesNumber: 5,
    searchQuery: '',
    setSearchWord: (newQuery: string) => set(() => ({searchQuery: newQuery})),
    filterTableData: () => {
        if(get().searchQuery!== null) {
            const filterData = get().tableData.filter(item => {
                // console.log(item.title.indexOf(get().searchQuery!.toLowerCase()))
                return item.title.toLowerCase().search(get().searchQuery!.toLowerCase())
            })
            console.log(filterData);
            set({filterData})
        }
    },
    fetchTableData: async ()=> {
        set({loading: true})
        const { data } = await axios<IFetchResult>(
            `${API_URL}?page=${get().currentPage}&pageSize=${get().pageSize}&q=Apple&from=2023-06-26&apiKey=${API_KEY}`
        )
        if(data.status === 'ok') {
            data.articles = data.articles.map((item, idx)=> {
                return{ ...item, key: idx}
            })
            set({tableData: data.articles})
        } else {
            set({hasError: true})
            throw (`Ошибка при загрузке данных: ${data.message}`)
        }
        set({loading: false})
    }
    }
))

export default useStore
