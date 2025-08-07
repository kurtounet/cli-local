export interface IFramework {
    name?: string;
    version?: string;
}

export interface ICreateFrameworkDto {
    name?: string;
    version?: string;
}

// Définir un type générique pour une réponse de l'API.
// C'est une bonne pratique de gérer les erreurs potentielles ou les réponses vides.
export type ApiResponse<T> = Promise<T | null>;

// L'interface de service API générique.
// Le type de l'id est déjà défini comme 'number' dans les méthodes.
export interface IApiService<T, TCreateDto, TUpdateDto> {
    getAll(): ApiResponse<T[]>;
    getById(id: number): ApiResponse<T>;
    create(body: TCreateDto): ApiResponse<T>;
    update(id: number, body: TUpdateDto): ApiResponse<T>;
    delete(id: number): ApiResponse<boolean>;
}
// Une classe de base simple.
class BaseService {
    // Une propriété que la classe enfant héritera.
    protected authToken: string;

    constructor(token: string) {
        this.authToken = token;
        console.log("BaseService initialized with token:", this.authToken);
    }
}
// La classe de service API générique qui implémente l'interface.
export class BaseApiService<T, TCreateDto, TUpdateDto> implements IApiService<T, TCreateDto, TUpdateDto> {
    // baseUrl est une propriété privée et en lecture seule.
    protected readonly baseUrlApi: string = '';

    // Le constructeur de ApiService doit appeler super() en premier.
    constructor(baseUrl: string) {
        // Appelle le constructeur de la classe parente (BaseService)


        // Initialise la propriété spécifique à ApiService.
        this.baseUrlApi = baseUrl;
    }

    // Toutes les méthodes renvoient maintenant correctement une Promise.
    // Les instructions 'return' ont été mises à jour pour simuler une opération asynchrone.
    getAll(): ApiResponse<T[]> {
        console.log(`Fetching all resources from ${this.baseUrlApi}`);
        // Une véritable implémentation utiliserait 'fetch' ici.
        return Promise.resolve([]);
    }

    getById(id: number): ApiResponse<T> {
        console.log(`Fetching resource with id ${id} from ${this.baseUrlApi}`);
        return Promise.resolve(null);
    }

    create(body: TCreateDto): ApiResponse<T> {
        console.log(`Creating resource at ${this.baseUrlApi} with body:`, body);
        return Promise.resolve(null);
    }

    update(id: number, body: TUpdateDto): ApiResponse<T> {
        console.log(`Updating resource with id ${id} at ${this.baseUrlApi}`);
        return Promise.resolve(null);
    }

    delete(id: number): ApiResponse<boolean> {
        console.log(`Deleting resource with id ${id} at ${this.baseUrlApi}`);
        return Promise.resolve(true);
    }
}

// La classe UserService qui hérite du service API générique.
// Elle doit fournir un constructeur pour passer la baseUrl à la classe parente.
class UserService extends BaseApiService<IFramework, ICreateFrameworkDto, ICreateFrameworkDto> {
    private readonly apiUrl: string;

    // Le constructeur est essentiel pour appeler le constructeur de la classe parente.
    constructor(baseUrl: string) {
        super(baseUrl);
        // La propriété baseUrlApi est maintenant initialisée, donc apiUrl est correcte.
        this.apiUrl = `${this.baseUrlApi}/user`;
        console.log("UserService endpoint is:", this.apiUrl);
    }
}

export { UserService };