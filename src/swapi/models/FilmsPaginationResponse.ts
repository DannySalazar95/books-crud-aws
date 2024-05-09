import Film from "./Film"

export default class FilmsPaginationResponse {
    private count: number
    private next?: string | null
    private previous?: string | null
    private results: Film[]

    constructor(
        count: number,
        results: Film[],
        next?: string | null,
        previous?: string | null
    ) {
        this.count = count
        this.next = next
        this.previous = previous
        this.results = results
    }

    public getCount() {
        return this.count
    }

    public getNext() {
        return this.next
    }

    public getPrevious() {
        return this.previous
    }

    public getResults(): Film[] {
        return this.results?? []
    }
}