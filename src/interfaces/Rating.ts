export interface Rating {
    id:          number;
    title:       string;
    year:        number;
    description: string;
    poster_path: string;
    created_at:  Date;
    tmdb_id:     number;
    watched:     null;
    n_rating:    number;
    m_rating:    number;
}
