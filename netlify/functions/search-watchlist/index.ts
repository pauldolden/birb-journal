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

  if (!event.queryStringParameters?.query) {
    return { statusCode: 400, body: "Bad Request", headers };
  }

  const { data, error } = await supabase
  .from('media')
  .select('*')
  .eq('title', event.queryStringParameters?.query)

  if (error) {
    return { statusCode: 500, body: error.message, headers };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data[0]),
    headers,
  };
};

export { handler };
