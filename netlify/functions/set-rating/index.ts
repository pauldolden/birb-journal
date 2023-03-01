import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { supabase } from "../../../src/config/supabase";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

  const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed", headers };
  }

  if (!event.body) {
    return { statusCode: 400, body: "Bad Request", headers };
  }

  const body = JSON.parse(event.body);

  const { tmdb_id, title, description, year, poster_path, n_rating, m_rating, watched } = body

  const { data, error } = await supabase
  .from('media')
  .upsert({ tmdb_id, title, description, year, poster_path, n_rating, m_rating, watched })
  .eq('tmdb_id', tmdb_id)
  .select('*')

  if (error) {
    return { statusCode: 500, body: error.message, headers };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers,
  };
};

export { handler };
