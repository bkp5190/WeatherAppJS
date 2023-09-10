declare module 'weather_api' {
  export interface AstronomyResponse {
    sun: {
      sunrise: string;
      sunset: string;
    };
    moon: {
      moonrise: string;
      moonset: string;
    };
    // Add other properties as needed
  }

  export interface ForecastResponse {
    location: {
      name: string;
      region: string;
      country: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
      };
    };
    // Add other properties as needed
  }

  export interface FutureWeatherResponse {
    location: {
      name: string;
      region: string;
      country: string;
    };
    forecast: {
      forecastday: {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
        };
        // Add other properties as needed
      }[];
    };
    // Add other properties as needed
  }

  export interface HistoryWeatherResponse {
    location: {
      name: string;
      region: string;
      country: string;
    };
    forecast: {
      forecastday: {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
        };
        // Add other properties as needed
      }[];
    };
    // Add other properties as needed
  }

  export interface IpLookupResponse {
    country: string;
    regionName: string;
    city: string;
    // Add other properties as needed
  }

  export interface RealtimeWeatherResponse {
    location: {
      name: string;
      region: string;
      country: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
      };
    };
    // Add other properties as needed
  }

  export interface SearchAutocompleteResponse {
    locations: {
      name: string;
      region: string;
      country: string;
    }[];
    // Add other properties as needed
  }

  export interface TimeZoneResponse {
    location: {
      name: string;
      region: string;
      country: string;
      tz_id: string;
    };
    // Add other properties as needed
  }

  export class ApiClient {
    constructor(apiKey: string);

    static instance: ApiClient;

    authentications: {
      ApiKeyAuth: {
        type: "apiKey";
        in: "query";
        name: "key";
        apiKey: string; // Define apiKey property here
      };
    };
  }

  export class APIsApi {
    constructor(apiClient?: ApiClient);
    // Add method signatures for APIsApi class here
    astronomy(q: string, dt: Date, callback): Promise<AstronomyResponse>;

    forecastWeather(
      q: string,
      days: number,
      opts?: any
    ): Promise<ForecastResponse>;

    futureWeather(q: string, opts?: any): Promise<FutureWeatherResponse>;

    historyWeather(
      q: string,
      dt: Date,
      opts?: any
    ): Promise<HistoryWeatherResponse>;

    ipLookup(q: string): Promise<IpLookupResponse>;

    realtimeWeather(q: string, opts?: any): Promise<RealtimeWeatherResponse>;

    searchAutocompleteWeather(q: string): Promise<SearchAutocompleteResponse>;

    timeZone(q: string): Promise<TimeZoneResponse>;
  }
}
