export interface ITableData {
    key: number,
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {
        id: string | null,
        name: string
    },
    title: string,
    url: string,
    urlToImage: string
    hidden: boolean
}

export interface IState {
    tableData: ITableData[],
    filterData: ITableData[],
    loading: boolean,
    hasError: boolean,
    currentPage: number,
    pageSize: number
    pagesNumber: number
    searchQuery: string;
    setSearchWord: (s:string) => void,
    filterTableData: () => void,
    setSelectedNews: (id: number) => void,
    selectedNews: ITableData | null
    fetchTableData: () => void
}

export interface IFetchResult {
    status: string,
    articles?: ITableData[]
    message?: string
}

export interface IColumns {
    title: string,
    dataIndex: string,
    key: string,
    render?: ()=> HTMLElement,
    sorter?: ()=> void,
    defaultSortOrder?: string,
    hidden?: boolean
}
