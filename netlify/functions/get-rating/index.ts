import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { supabase } from "../../../src/config/supabase";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

  if (event.httpMethod !== "get") {
    return { statusCode: 405, body: "Method Not Allowed", headers };
  }

  if (!event.queryStringParameters?.tmdb_id) {
    return { statusCode: 400, body: "Bad Request", headers };
  }

  const { data, error } = await supabase
  .from('media')
  .select('*')
  .eq('tmdb_id', event.queryStringParameters?.tmdb_id)

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
