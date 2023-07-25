const apiUrl = "https://api-casino.recois.com/slots/list";

export const getGames = async () => {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application.json",
    },
  });

  return res.json();
};
