export default {
  definition: {
    name: "weather",
    description: "Récupère la météo locale en utilisant OpenWeatherMap.",
    inputSchema: {
      type: "object",
      properties: {
        city: { type: "string", description: "La ville demandée" },
      },
    },
  },
  execute: async (args, context) => {
    const { city } = args;
    if (!city) {
      return "Veuillez spécifier une ville. Exemple: weather Paris";
    }

    const apiKey = process.env.OPENWEATHER_API_KEY || "";
    if (!apiKey) return "API Key manquante (OPENWEATHER_API_KEY)";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.cod !== 200) {
        return `Erreur lors de la récupération de la météo pour ${city}: ${data.message}`;
      }

      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;

      return {
        summary: `Météo à ${city}: ${weatherDescription}, ${temperature}°C`,
        details: data,
      };
    } catch (error) {
      return `Une erreur est survenue: ${error.message}`;
    }
  },
};
