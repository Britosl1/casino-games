const apiUrl = "https://api-casino.recois.com/slots/list";

type Sort = "a-z" | "z-a" | "release";

interface GetGamesResponse {
  sort_by?: string;
  search?: string;
  num?: number;
  page_num?: number;
}

export const getGames = async (params: GetGamesResponse) => {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(params),
  });

  return res.json();
};
