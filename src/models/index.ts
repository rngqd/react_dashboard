export interface ITableData {
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
}

export interface IState {
    tableData: ITableData[],
    filterData: ITableData[],
    loading: false,
    hasError: false,
    currentPage: number,
    pageSize: number
    pageNumber: number
    searchQuery: string | null;
    fetchTableData: () => void
}

export interface IFetchResult {
    data: {
        status: string,
        articles?: ITableData[]
        message?: string
    };
    
}
