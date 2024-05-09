import { randomUUID } from 'crypto'

export default class Book {
    id: string
    title: string
    author: string
    createdAt: string

    constructor(id: string | null, title: string, author: string, createdAt: string) {
        this.id = id ?? randomUUID()
        this.title = title
        this.author = author
        this.createdAt = createdAt
    }
}