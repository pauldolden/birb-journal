import type { Movie } from "./Movies";

export interface Shows {
    page:          number;
    results:       Show[];
    total_pages:   number;
    total_results: number;
}

export interface Show {
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:                number;
    origin_country:    string[];
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       null | string;
    first_air_date:    string;
    name:              string;
    vote_average:      number;
    vote_count:        number;
}

  export const isShow = (result: Show | Movie): result is Show => {
    return (result as Show).first_air_date == undefined;
  };

