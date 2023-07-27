import { create } from 'zustand'
import axios from 'axios'
import { IState, IFetchResult, ITableData } from '@/models';
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
    selectedNews: null,
    
    setSearchWord: (newQuery: string) => set(() => ({searchQuery: newQuery})),

    setSelectedNews:(newsId: number) => {
        const selectedNews = get().tableData.find(data=> data.key === newsId)
        
        set({selectedNews})
    },
    filterTableData: () => {
        if(get().searchQuery!== '') {
            const filterData = get().tableData.filter(item => {
                return item.title.includes(get().searchQuery)
            })
            set({filterData})
        }
    },
    
    fetchTableData: async ()=> {
        set({loading: true})
        const { data } = await axios<IFetchResult>(
            `${API_URL}?page=${get().currentPage}&pageSize=${get().pageSize}&q=Apple&from=2023-06-26&apiKey=${API_KEY}`
        )
        if(data.status === 'ok' && data.articles) {
            data.articles = data.articles.map((item: ITableData, idx: number)=> {
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
