export interface INuxtConfigTs {
  compatibilityDate: "2025-07-15";
  devtools: { enabled: true };
  // Mode d’exécution
  ssr?: boolean; // Server-Side Rendering activé/désactivé
  dev?: boolean; // Mode dev

  // Informations sur l’app
  app?: {
    baseURL?: string; // par défaut "/"
    buildAssetsDir?: string; // par défaut "_nuxt/"
    head?: {
      title?: string;
      meta?: { name?: string; content?: string }[];
      link?: { rel?: string; href?: string }[];
    };
  };

  // Modules Nuxt
  modules?: (string | [string, Record<string, any>])[];

  // Plugins
  plugins?: string[];

  // CSS globales
  css?: string[];

  // Build
  build?: {
    transpile?: (string | RegExp)[];
  };

  // Runtime config
  runtimeConfig?: {
    public?: Record<string, any>;
    [key: string]: any;
  };

  // Nitro (API/server engine)
  nitro?: {
    preset?: string;
    storage?: Record<string, any>;
  };

  // Typescript config
  typescript?: {
    strict?: boolean;
    shim?: boolean;
  };

  // Vite config
  vite?: {
    define?: Record<string, any>;
    server?: {
      port?: number;
      proxy?: Record<string, string>;
    };
  };
}
