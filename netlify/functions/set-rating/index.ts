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

  const { rating_id, rating, field_name } = body

  const { data, error } = await supabase
  .from('ratings')
  .select()
  .eq('id', rating_id)

  if (error) {
    return { statusCode: 500, body: error.message, headers };
  }

  console.log(data)

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
    headers,
  };
};

export { handler };
