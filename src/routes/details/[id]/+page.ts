import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { app } from '../../../stores/app';
import { api } from '../../../config/api';
import { SearchTypes } from '../../../enums/SearchTypes';

export async function load({ params }: PageLoad) {
  const { id } = params;
  let searchType: SearchTypes = SearchTypes.TV;

  app.subscribe((data) => {
    searchType = data.searchType;
  });

  if (!id) {
    return error(404, 'Not found');
  };

  const { data } = await api.get("/details", {
   params: {
      id,
      type: searchType,
    },
  });

  return {
    result: data,
  };
}

