const url =
  "http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
let token = process.env.DADA_KEY;

const getData = async (query: string): Promise<DaDataResponce> => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: query }),
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

export default getData;
