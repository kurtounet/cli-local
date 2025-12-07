import { IRoute } from "@features/frameworks/angular/model/angular-model";
import { writeFile } from "@utils/file-utils";

export const angularDefaultRouteTemplate: IRoute[] = [
  {
    path: "",
    component: "HomeComponent",
  },
];

export function angularGenerateRouteService(
  rootPathProjectFramework: string,
  routes: IRoute[],
) {
  const effectiveRoutes =
    routes.length > 0 ? routes : angularDefaultRouteTemplate;

  // Génération des imports
  const imports = effectiveRoutes
    .map(
      (route: IRoute) =>
        `import { ${route.component} } from './pages/${route.component}.component';`,
    )
    .join("\n");

  // Génération du tableau de routes Angular sous forme de code TS
  const routesCode = `export const routes: Routes = [
${effectiveRoutes
  .map(
    (route: IRoute) =>
      `  { path: '${route.path}', component: ${route.component} }`,
  )
  .join(",\n")}
];`;

  const fileContent = `import { Routes } from '@angular/router';
${imports}

${routesCode}
`;

  writeFile(`${rootPathProjectFramework}/app.routes.ts`, fileContent);
}
