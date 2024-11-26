
type AuthorType = {
    id: string,
    name: string
}

export type DecksType = {
    isFavorite: boolean,
    author: AuthorType,
    id: string,
    userId: string,
    name: string,
    isPrivate: boolean,
    cover: string,
    created: string,
    updated: string,
    cardsCount: number
}

type PaginationType = {
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number
}

export type ResponseType = {
    items: DecksType[],
    pagination: PaginationType
}