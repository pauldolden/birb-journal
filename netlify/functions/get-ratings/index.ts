import { Handler, HandlerEvent } from "@netlify/functions";
import { supabase } from "../../../src/config/supabase";

const handler: Handler = async (event: HandlerEvent) => {
  const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed", headers };
  }

  if (!event.queryStringParameters?.type) {
    return { statusCode: 400, body: "Bad Request", headers };
  }

  const { data, error } = await supabase
  .from('media')
  .select('*')
  .eq('type', event.queryStringParameters?.type)
  .not('n_rating',"is", null)
  .not('m_rating', "is", null)

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
