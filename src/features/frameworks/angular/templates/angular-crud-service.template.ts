import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function angularCrudServiceTemplate(entity: IEntityJson) {
  const entityName = entity.namePascalCase;
  const entityNamePlural = entity.namePascalCase || `${entityName}s`;
  const entityNamePluralLower = entityNamePlural.toLowerCase();

  return `import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { I${entityName} } from '../models/${entity.nameKebabCase}.model';
export interface IHydraCollection<T> {
    'hydra:member': T[];
    'hydra:totalItems': number;
}

@Injectable({
    providedIn: 'root'
})
export class ${entityName}Service {
    private routeApi = \`\${environment.baseApiUrl}/${entityNamePluralLower}\`;
    private httpClient = inject(HttpClient);
    
    constructor() { }
    
    // Get all ${entityNamePlural}
    getAll${entityNamePlural}(): Observable<I${entityName}[]> {
        return this.httpClient.get<IHydraCollection<I${entityName}>>(this.routeApi).pipe(
            map(response => {
                return response['hydra:member'];
            })
        );
    }

    // Get ${entityName} by ID
    get${entityName}ById(id: string): Observable<I${entityName}> {
        return this.httpClient.get<I${entityName}>(\`\${this.routeApi}/\${id}\`);
    }

    // Create a new ${entityName}
    create${entityName}(body: I${entityName}): Observable<I${entityName}> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.post<I${entityName}>(this.routeApi, body, { headers });
    }

    // Update ${entityName} by ID
    update${entityName}(id: string, body: I${entityName}): Observable<I${entityName}> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.patch<I${entityName}>(\`\${this.routeApi}/\${id}\`, body, { headers });
    }

    // Delete ${entityName}
    delete${entityName}(id: string): Observable<void> {
        return this.httpClient.delete<void>(\`\${this.routeApi}/\${id}\`);
    }
}`;
}
