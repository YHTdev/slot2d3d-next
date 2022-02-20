export const ResponseObj = {
  statusCode: 500,
  message: "",
  Data: null,
  accessToken: null,
  Error: null,
};


export function jsonResponse(status, data) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      
      'Content-Type': 'application/json',
    },
  })
}