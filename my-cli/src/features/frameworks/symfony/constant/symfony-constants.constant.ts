export const NEWLINE = "\n";
export const INDENT = "  ";

export function sqlToDoctrineType(sqlType: string): string {
  const sqlToDoctrineMapping: Record<string, string> = {
    // Types numériques
    int: "integer",
    integer: "integer",
    smallint: "smallint",
    bigint: "bigint",
    decimal: "float",
    numeric: "float",
    float: "float",
    real: "float",
    double: "float",

    // Types booléens
    boolean: "boolean",
    tinyint: "boolean",
    bit: "boolean",

    // Types chaînes de caractères
    char: "string",
    varchar: "string",
    text: "text",
    tinytext: "text",
    mediumtext: "text",
    longtext: "text",

    // Types dates et heures
    date: "date",
    datetime: "datetime",
    timestamp: "datetime",
    time: "time",

    // Types JSON et tableau
    json: "json",
    jsonb: "json",
    array: "array",
    simple_array: "simple_array",

    // Types binaires
    blob: "blob",
    binary: "binary",

    // Autres types
    uuid: "guid",
  };
  return sqlToDoctrineMapping[sqlType.toLowerCase()] || "any";
}

export function getAttributeTypeORM(type: string): string {
  const Mapping: Record<string, string> = {
    array: "JSON",
    ascii_string: "ASCII_STRING",
    bigint: "BIGINT",
    binary: "BINARY",
    blob: "BLOB",
    boolean: "BOOLEAN",
    tinyint: "BOOLEAN",
    date: "DATE_MUTABLE",
    date_immutable: "DATE_IMMUTABLE",
    dateinterval: "DATEINTERVAL",
    datetime: "DATETIME_MUTABLE",
    timestamp: "DATETIME_MUTABLE",
    datetime_immutable: "DATETIME_IMMUTABLE",
    datetimetz: "DATETIMETZ_MUTABLE",
    datetimetz_immutable: "DATETIMETZ_IMMUTABLE",
    decimal: "DECIMAL, precision: 10, scale: 0",
    float: "FLOAT",
    guid: "GUID",
    integer: "INTEGER",
    json: "JSON",
    object: "JSON",
    simple_array: "SIMPLE_ARRAY",
    smallint: "SMALLINT",
    string: "STRING",
    varchar: "length:",
    text: "TEXT",
    time: "TIME_MUTABLE",
    time_immutable: "TIME_IMMUTABLE",
  };
  return Mapping[type.toLowerCase()] || "";
}

// export function getPropertyType(type: string): string {
//   const Mapping: Record<string, string> = {
//     smallint: 'int',
//     int: 'int',
//     tinyint: 'bool',
//     bigint: 'string',
//     decimal: 'string',
//     float: 'float',
//     integer: 'int',
//     json: 'array',
//     ascii_string: '',
//     binary: '',
//     blob: '',
//     boolean: 'bool',
//     uuid: 'Uuid',
//     guid: 'string',
//     object: 'object',
//     simple_array: 'simple_array',
//     string: 'string',
//     text: 'string',
//     time_mutable: '\Datetime',
//     time_immutable: '\DatetimeImmutable',
//     date_mutable: '\Datetime',
//     date_immutable: '\DateTimeImmutable',
//     timestamp: '\DateTimeImmutable',
//     dateinterval: '\Dateinterval',
//     datetime_mutable: '\Datetime',
//     datetime_immutable: '\Datetime_immutable',
//     datetimetz_mutable: '\DateTime',
//     datetimetz_immutable: '\DateTimeImmutable',
//     dateInterval: '?\DateInterval',
//     varchar: 'string',
//   };
//   return Mapping[type.toLowerCase()] || '';
// }
// Types de classes supportées dans Symfony
export enum ClassType {
  ENTITY = "entity",
  DTO = "dto",
  FORM = "form",
  CONTROLLER = "controller",
  SERVICE = "service",
  REPOSITORY = "repository",
  VOTER = "voter",
  EVENT_LISTENER = "event_listener",
  COMMAND = "command",
}

// Types de DTOs/Forms
export enum DtoType {
  CREATE = "create",
  UPDATE = "update",
  FILTER = "filter",
  RESPONSE = "response",
}

// Contraintes de validation Symfony
export const VALIDATION_CONSTRAINTS = {
  NOT_BLANK: "NotBlank",
  NOT_NULL: "NotNull",
  TYPE: "Type",
  LENGTH: "Length",
  RANGE: "Range",
  EMAIL: "Email",
  URL: "Url",
  REGEX: "Regex",
  IP: "Ip",
  UUID: "Uuid",
  JSON: "Json",

  // Contraintes de chaînes
  BLANK: "Blank",
  CHOICE: "Choice",
  COUNTRY: "Country",
  CURRENCY: "Currency",
  LANGUAGE: "Language",
  LOCALE: "Locale",
  LUHN: "Luhn",
  NO_SUSPICIOUS_CHARACTERS: "NoSuspiciousCharacters",
  PASSWORD_STRENGTH: "PasswordStrength",

  // Contraintes de nombres
  DIVISIBLE_BY: "DivisibleBy",
  GREATER_THAN: "GreaterThan",
  GREATER_THAN_OR_EQUAL: "GreaterThanOrEqual",
  IDENTICAL_TO: "IdenticalTo",
  LESS_THAN: "LessThan",
  LESS_THAN_OR_EQUAL: "LessThanOrEqual",
  NEGATIVE: "Negative",
  NEGATIVE_OR_ZERO: "NegativeOrZero",
  NOT_EQUAL_TO: "NotEqualTo",
  NOT_IDENTICAL_TO: "NotIdenticalTo",
  POSITIVE: "Positive",
  POSITIVE_OR_ZERO: "PositiveOrZero",

  // Contraintes de dates
  DATE: "Date",
  DATE_TIME: "DateTime",
  TIME: "Time",
  TIMEZONE: "Timezone",

  // Contraintes de fichiers
  FILE: "File",
  IMAGE: "Image",

  // Contraintes de collections
  ALL: "All",
  COLLECTION: "Collection",
  COUNT: "Count",
  UNIQUE: "Unique",

  // Contraintes de comparaison
  EQUAL_TO: "EqualTo",

  // Contraintes de cartes bancaires
  CARD_SCHEME: "CardScheme",

  // Contraintes de codes
  BIC: "Bic",
  IBAN: "Iban",
  ISBN: "Isbn",
  ISSN: "Issn",

  // Contraintes de réseaux sociaux
  TWITTER: "Twitter",

  // Contraintes de validation conditionnelle
  WHEN: "When",

  // Contraintes de groupes
  GROUP_SEQUENCE: "GroupSequence",

  // Contraintes personnalisées
  CALLBACK: "Callback",
  EXPRESSION: "Expression",

  // Contraintes de sécurité
  USER_PASSWORD: "UserPassword",

  // Contraintes de format
  CIDR: "Cidr",
  CSS_COLOR: "CssColor",
  HOSTNAME: "Hostname",
  MAC_ADDRESS: "MacAddress",
  ULID: "Ulid",

  // Contraintes de validation d'entité
  VALID: "Valid",
  TRAVERSE: "Traverse",

  // Contraintes de plage
  RANGE_INCLUSIVE: "RangeInclusive",
  RANGE_EXCLUSIVE: "RangeExclusive",

  // Contraintes de longueur
  LENGTH_EXACT: "LengthExact",
  LENGTH_MIN: "LengthMin",
  LENGTH_MAX: "LengthMax",

  // Contraintes de format spécifiques
  CREDIT_CARD: "CreditCard",
  PHONE_NUMBER: "PhoneNumber",
  VAT_ID: "VatId",

  // Contraintes de données géographiques
  LATITUDE: "Latitude",
  LONGITUDE: "Longitude",

  // Contraintes de format web
  HTML: "Html",
  XML: "Xml",

  // Contraintes de format numérique
  DECIMAL: "Decimal",
  INTEGER: "Integer",
  FLOAT: "Float",

  // Contraintes de format booléen
  BOOLEAN: "Boolean",

  // Contraintes de format array
  ARRAY: "Array",

  // Contraintes de format object
  OBJECT: "Object",

  // Contraintes de format null
  NULL: "Null",

  // Contraintes de format scalar
  SCALAR: "Scalar",

  // Contraintes de format callable
  CALLABLE: "Callable",

  // Contraintes de format iterable
  ITERABLE: "Iterable",

  // Contraintes de format countable
  COUNTABLE: "Countable",

  // Contraintes de format resource
  RESOURCE: "Resource",

  // Contraintes de format alnum
  ALNUM: "Alnum",

  // Contraintes de format alpha
  ALPHA: "Alpha",

  // Contraintes de format digit
  DIGIT: "Digit",

  // Contraintes de format lower
  LOWER: "Lower",

  // Contraintes de format upper
  UPPER: "Upper",

  // Contraintes de format punct
  PUNCT: "Punct",

  // Contraintes de format space
  SPACE: "Space",

  // Contraintes de format xdigit
  XDIGIT: "Xdigit",

  // Contraintes de format control
  CONTROL: "Control",

  // Contraintes de format graph
  GRAPH: "Graph",

  // Contraintes de format print
  PRINT: "Print",

  // Contraintes de format word
  WORD: "Word",

  // Contraintes de format ascii
  ASCII: "Ascii",
} as const;

// Annotations Doctrine ORM
export const DOCTRINE_ANNOTATIONS = {
  // Entité
  ENTITY: "Entity",
  TABLE: "Table",
  REPOSITORY_CLASS: "repositoryClass",

  // Colonnes
  ID: "Id",
  COLUMN: "Column",
  GENERATED_VALUE: "GeneratedValue",
  SEQUENCE_GENERATOR: "SequenceGenerator",
  CUSTOM_ID_GENERATOR: "CustomIdGenerator",

  // Types de colonnes
  CREATED_AT: "CreatedAt",
  UPDATED_AT: "UpdatedAt",

  // Relations
  ONE_TO_ONE: "OneToOne",
  ONE_TO_MANY: "OneToMany",
  MANY_TO_ONE: "ManyToOne",
  MANY_TO_MANY: "ManyToMany",
  JOIN_COLUMN: "JoinColumn",
  JOIN_TABLE: "JoinTable",
  INVERSE_JOIN_COLUMN: "InverseJoinColumn",

  // Index et contraintes
  INDEX: "Index",
  UNIQUE_CONSTRAINT: "UniqueConstraint",

  // Héritage
  INHERITANCE_TYPE: "InheritanceType",
  DISCRIMINATOR_COLUMN: "DiscriminatorColumn",
  DISCRIMINATOR_MAP: "DiscriminatorMap",
  DISCRIMINATOR_VALUE: "DiscriminatorValue",

  // Événements
  PRE_PERSIST: "PrePersist",
  POST_PERSIST: "PostPersist",
  PRE_UPDATE: "PreUpdate",
  POST_UPDATE: "PostUpdate",
  PRE_REMOVE: "PreRemove",
  POST_REMOVE: "PostRemove",
  POST_LOAD: "PostLoad",
  PRE_FLUSH: "PreFlush",

  // Autres
  VERSION: "Version",
  EMBEDDED: "Embedded",
  EMBEDDABLE: "Embeddable",
  MAPPED_SUPERCLASS: "MappedSuperclass",
  HAS_LIFECYCLE_CALLBACKS: "HasLifecycleCallbacks",
  CACHE: "Cache",
  CHANGE_TRACKING_POLICY: "ChangeTrackingPolicy",
  ENTITY_LISTENERS: "EntityListeners",
  NAMED_QUERIES: "NamedQueries",
  NAMED_QUERY: "NamedQuery",
  NAMED_NATIVE_QUERIES: "NamedNativeQueries",
  NAMED_NATIVE_QUERY: "NamedNativeQuery",
  SQL_RESULT_SET_MAPPING: "SqlResultSetMapping",
  SQL_RESULT_SET_MAPPINGS: "SqlResultSetMappings",
  ATTRIBUTE_OVERRIDES: "AttributeOverrides",
  ATTRIBUTE_OVERRIDE: "AttributeOverride",
  ASSOCIATION_OVERRIDES: "AssociationOverrides",
  ASSOCIATION_OVERRIDE: "AssociationOverride",
  ORDER_BY: "OrderBy",

  // Annotations spécifiques aux colonnes
  COLUMN_RESULT: "ColumnResult",
  ENTITY_RESULT: "EntityResult",
  FIELD_RESULT: "FieldResult",

  // Annotations de mapping
  MAPPING: "Mapping",
  MAPPED_BY: "mappedBy",
  INVERSED_BY: "inversedBy",
  CASCADE: "cascade",
  FETCH: "fetch",
  ORPHAN_REMOVAL: "orphanRemoval",

  // Annotations de validation
  ASSERT: "Assert",

  // Annotations de sérialisation
  SERIALIZER: "Serializer",
  GROUPS: "Groups",
  MAX_DEPTH: "MaxDepth",
  SERIALIZE: "Serialize",
  IGNORE: "Ignore",
  EXPOSE: "Expose",
  EXCLUDE: "Exclude",
  TYPE_SERIALIZER: "Type",
  ACCESSOR: "Accessor",
  VIRTUAL_PROPERTY: "VirtualProperty",
  PRE_SERIALIZE: "PreSerialize",
  POST_SERIALIZE: "PostSerialize",
  PRE_DESERIALIZE: "PreDeserialize",
  POST_DESERIALIZE: "PostDeserialize",

  // Annotations de cache
  CACHE_REGION: "CacheRegion",
  CACHE_USAGE: "CacheUsage",

  // Annotations de requêtes
  QUERY_BUILDER: "QueryBuilder",
  DQL: "DQL",
  SQL: "SQL",

  // Annotations de pagination
  PAGINATE: "Paginate",

  // Annotations de filtres
  FILTER: "Filter",

  // Annotations de logging
  LOGGABLE: "Loggable",
  VERSIONED: "Versioned",

  // Annotations de soft delete
  SOFT_DELETEABLE: "SoftDeleteable",

  // Annotations de sluggable
  SLUGGABLE: "Sluggable",
  SLUG: "Slug",

  // Annotations de timestampable
  TIMESTAMPABLE: "Timestampable",

  // Annotations de tree
  TREE: "Tree",
  TREE_LEFT: "TreeLeft",
  TREE_RIGHT: "TreeRight",
  TREE_PARENT: "TreeParent",
  TREE_ROOT: "TreeRoot",
  TREE_LEVEL: "TreeLevel",

  // Annotations de sortable
  SORTABLE: "Sortable",
  SORTABLE_POSITION: "SortablePosition",
  SORTABLE_GROUP: "SortableGroup",

  // Annotations de translatable
  TRANSLATABLE: "Translatable",
  TRANSLATION: "Translation",
  LOCALE: "Locale",

  // Annotations de blameable
  BLAMEABLE: "Blameable",

  // Annotations de IP traceable
  IP_TRACEABLE: "IpTraceable",

  // Annotations de reference
  REFERENCE: "Reference",
  REFERENCE_INTEGRITY: "ReferenceIntegrity",

  // Annotations de uploadable
  UPLOADABLE: "Uploadable",
  UPLOAD_FILE_PATH: "UploadableFilePath",
  UPLOAD_FILE_NAME: "UploadableFileName",
  UPLOAD_FILE_SIZE: "UploadableFileSize",
  UPLOAD_FILE_MIME_TYPE: "UploadableFileMimeType",
} as const;

// Types de colonnes Doctrine
export const DOCTRINE_COLUMN_TYPES = {
  // Types de base
  STRING: "string",
  TEXT: "text",
  INTEGER: "integer",
  SMALLINT: "smallint",
  BIGINT: "bigint",
  DECIMAL: "decimal",
  FLOAT: "float",
  BOOLEAN: "boolean",
  DATE: "date",
  TIME: "time",
  DATETIME: "datetime",
  DATETIME_IMMUTABLE: "datetime_immutable",
  DATETIMETZ: "datetimetz",
  DATETIMETZ_IMMUTABLE: "datetimetz_immutable",
  DATE_IMMUTABLE: "date_immutable",
  TIME_IMMUTABLE: "time_immutable",
  DATEINTERVAL: "dateinterval",

  // Types avancés
  ARRAY: "array",
  SIMPLE_ARRAY: "simple_array",
  JSON: "json",
  JSON_ARRAY: "json_array",
  OBJECT: "object",
  BLOB: "blob",
  BINARY: "binary",
  GUID: "guid",
  UUID: "uuid",
  ULID: "ulid",

  // Types spécialisés
  ASCII_STRING: "ascii_string",

  // Types géographiques (avec extensions)
  GEOMETRY: "geometry",
  POINT: "point",
  LINESTRING: "linestring",
  POLYGON: "polygon",
  MULTIPOINT: "multipoint",
  MULTILINESTRING: "multilinestring",
  MULTIPOLYGON: "multipolygon",
  GEOGRAPHY: "geography",

  // Types monétaires
  MONEY: "money",
  CURRENCY: "currency",

  // Types de hash
  PASSWORD: "password",
  HASH: "hash",

  // Types de fichiers
  FILE: "file",
  IMAGE: "image",

  // Types de collection
  COLLECTION: "collection",

  // Types de référence
  REFERENCE: "reference",
  REFERENCE_MANY: "reference_many",

  // Types de données sérialisées
  SERIALIZED: "serialized",

  // Types de données compressées
  COMPRESSED: "compressed",

  // Types de données chiffrées
  ENCRYPTED: "encrypted",

  // Types de données localisées
  LOCALIZED: "localized",

  // Types de données versionnées
  VERSIONED: "versioned",

  // Types de données auditées
  AUDITED: "audited",

  // Types de données temporelles
  TEMPORAL: "temporal",

  // Types de données de workflow
  WORKFLOW: "workflow",

  // Types de données de state machine
  STATE_MACHINE: "state_machine",

  // Types de données de configuration
  CONFIG: "config",

  // Types de données de traduction
  TRANSLATION: "translation",

  // Types de données de métadonnées
  METADATA: "metadata",

  // Types de données de statistiques
  STATISTICS: "statistics",

  // Types de données de cache
  CACHE: "cache",

  // Types de données de session
  SESSION: "session",

  // Types de données de log
  LOG: "log",

  // Types de données de notification
  NOTIFICATION: "notification",

  // Types de données de message
  MESSAGE: "message",

  // Types de données de tâche
  TASK: "task",

  // Types de données de job
  JOB: "job",

  // Types de données de queue
  QUEUE: "queue",

  // Types de données de lock
  LOCK: "lock",

  // Types de données de semaphore
  SEMAPHORE: "semaphore",

  // Types de données de mutex
  MUTEX: "mutex",

  // Types de données de rate limit
  RATE_LIMIT: "rate_limit",

  // Types de données de throttle
  THROTTLE: "throttle",

  // Types de données de circuit breaker
  CIRCUIT_BREAKER: "circuit_breaker",

  // Types de données de health check
  HEALTH_CHECK: "health_check",

  // Types de données de metrics
  METRICS: "metrics",

  // Types de données de tracing
  TRACING: "tracing",

  // Types de données de profiling
  PROFILING: "profiling",

  // Types de données de monitoring
  MONITORING: "monitoring",

  // Types de données de alerting
  ALERTING: "alerting",

  // Types de données de reporting
  REPORTING: "reporting",

  // Types de données de analytics
  ANALYTICS: "analytics",

  // Types de données de business intelligence
  BUSINESS_INTELLIGENCE: "business_intelligence",

  // Types de données de data warehouse
  DATA_WAREHOUSE: "data_warehouse",

  // Types de données de data lake
  DATA_LAKE: "data_lake",

  // Types de données de data mining
  DATA_MINING: "data_mining",

  // Types de données de machine learning
  MACHINE_LEARNING: "machine_learning",

  // Types de données de artificial intelligence
  ARTIFICIAL_INTELLIGENCE: "artificial_intelligence",

  // Types de données de natural language processing
  NATURAL_LANGUAGE_PROCESSING: "natural_language_processing",

  // Types de données de computer vision
  COMPUTER_VISION: "computer_vision",

  // Types de données de speech recognition
  SPEECH_RECOGNITION: "speech_recognition",

  // Types de données de recommendation
  RECOMMENDATION: "recommendation",

  // Types de données de personalization
  PERSONALIZATION: "personalization",

  // Types de données de optimization
  OPTIMIZATION: "optimization",

  // Types de données de simulation
  SIMULATION: "simulation",

  // Types de données de modeling
  MODELING: "modeling",

  // Types de données de prediction
  PREDICTION: "prediction",

  // Types de données de forecasting
  FORECASTING: "forecasting",

  // Types de données de classification
  CLASSIFICATION: "classification",

  // Types de données de clustering
  CLUSTERING: "clustering",

  // Types de données de regression
  REGRESSION: "regression",

  // Types de données de anomaly detection
  ANOMALY_DETECTION: "anomaly_detection",

  // Types de données de fraud detection
  FRAUD_DETECTION: "fraud_detection",

  // Types de données de risk assessment
  RISK_ASSESSMENT: "risk_assessment",

  // Types de données de compliance
  COMPLIANCE: "compliance",

  // Types de données de governance
  GOVERNANCE: "governance",

  // Types de données de security
  SECURITY: "security",

  // Types de données de privacy
  PRIVACY: "privacy",

  // Types de données de gdpr
  GDPR: "gdpr",

  // Types de données de audit trail
  AUDIT_TRAIL: "audit_trail",

  // Types de données de change log
  CHANGE_LOG: "change_log",

  // Types de données de version control
  VERSION_CONTROL: "version_control",

  // Types de données de backup
  BACKUP: "backup",

  // Types de données de restore
  RESTORE: "restore",

  // Types de données de migration
  MIGRATION: "migration",

  // Types de données de synchronization
  SYNCHRONIZATION: "synchronization",

  // Types de données de replication
  REPLICATION: "replication",

  // Types de données de sharding
  SHARDING: "sharding",

  // Types de données de partitioning
  PARTITIONING: "partitioning",

  // Types de données de clustering_db
  CLUSTERING_DB: "clustering_db",

  // Types de données de load balancing
  LOAD_BALANCING: "load_balancing",

  // Types de données de failover
  FAILOVER: "failover",

  // Types de données de high availability
  HIGH_AVAILABILITY: "high_availability",

  // Types de données de disaster recovery
  DISASTER_RECOVERY: "disaster_recovery",

  // Types de données de business continuity
  BUSINESS_CONTINUITY: "business_continuity",
} as const;
// Options de sérialisation Symfony
export const SERIALIZER_OPTIONS = {
  GROUPS: "groups",
  ATTRIBUTES: "attributes",
  CIRCULAR_REFERENCE_LIMIT: "circular_reference_limit",
  CIRCULAR_REFERENCE_HANDLER: "circular_reference_handler",
  DATETIME_FORMAT: "datetime_format",
  DATEINTERVAL_FORMAT: "dateinterval_format",
  DECIMAL_SEPARATOR: "decimal_separator",
  ENABLE_MAX_DEPTH: "enable_max_depth",
  SKIP_NULL_VALUES: "skip_null_values",
  PRESERVE_EMPTY_OBJECTS: "preserve_empty_objects",
  CALLBACKS: "callbacks",
} as const;
// Types de formulaires Symfony
export const FORM_TYPES = {
  // Types de base
  TEXT: "TextType",
  TEXTAREA: "TextareaType",
  EMAIL: "EmailType",
  PASSWORD: "PasswordType",
  SEARCH: "SearchType",
  URL: "UrlType",
  TEL: "TelType",
  COLOR: "ColorType",

  // Types numériques
  INTEGER: "IntegerType",
  NUMBER: "NumberType",
  PERCENT: "PercentType",
  MONEY: "MoneyType",
  RANGE: "RangeType",

  // Types de choix
  CHOICE: "ChoiceType",
  ENTITY: "EntityType",
  COUNTRY: "CountryType",
  LANGUAGE: "LanguageType",
  LOCALE: "LocaleType",
  TIMEZONE: "TimezoneType",
  CURRENCY: "CurrencyType",

  // Types de dates
  DATE: "DateType",
  TIME: "TimeType",
  DATETIME: "DateTimeType",
  BIRTHDAY: "BirthdayType",
  DATE_INTERVAL: "DateIntervalType",
  WEEK: "WeekType",

  // Types de fichiers
  FILE: "FileType",

  // Types de booléens
  CHECKBOX: "CheckboxType",
  RADIO: "RadioType",

  // Types de collections
  COLLECTION: "CollectionType",

  // Types de boutons
  BUTTON: "ButtonType",
  SUBMIT: "SubmitType",
  RESET: "ResetType",

  // Types cachés
  HIDDEN: "HiddenType",

  // Types de groupes
  REPEATED: "RepeatedType",

  // Types de formulaires
  FORM: "FormType",

  // Types de validation
  CSRF: "CsrfType",

  // Types de données
  DATA: "DataType",

  // Types de données transformées
  TRANSFORMED: "TransformedType",

  // Types de données conditionnelles
  CONDITIONAL: "ConditionalType",

  // Types de données dynamiques
  DYNAMIC: "DynamicType",

  // Types de données de configuration
  CONFIG: "ConfigType",

  // Types de données de paramètres
  PARAMETER: "ParameterType",

  // Types de données de variables
  VARIABLE: "VariableType",

  // Types de données de constantes
  CONSTANT: "ConstantType",

  // Types de données de métadonnées
  METADATA: "MetadataType",

  // Types de données de contexte
  CONTEXT: "ContextType",

  // Types de données de session
  SESSION: "SessionType",

  // Types de données de cache
  CACHE: "CacheType",

  // Types de données de cookie
  COOKIE: "CookieType",

  // Types de données de header
  HEADER: "HeaderType",

  // Types de données de query
  QUERY: "QueryType",

  // Types de données de body
  BODY: "BodyType",

  // Types de données de request
  REQUEST: "RequestType",

  // Types de données de response
  RESPONSE: "ResponseType",

  // Types de données de route
  ROUTE: "RouteType",

  // Types de données de controller
  CONTROLLER: "ControllerType",

  // Types de données de service
  SERVICE: "ServiceType",

  // Types de données de repository
  REPOSITORY: "RepositoryType",

  // Types de données de manager
  MANAGER: "ManagerType",

  // Types de données de handler
  HANDLER: "HandlerType",

  // Types de données de processor
  PROCESSOR: "ProcessorType",

  // Types de données de transformer
  TRANSFORMER: "TransformerType",

  // Types de données de validator
  VALIDATOR: "ValidatorType",

  // Types de données de serializer
  SERIALIZER: "SerializerType",

  // Types de données de normalizer
  NORMALIZER: "NormalizerType",

  // Types de données de denormalizer
  DENORMALIZER: "DenormalizerType",

  // Types de données de encoder
  ENCODER: "EncoderType",

  // Types de données de decoder
  DECODER: "DecoderType",

  // Types de données de listener
  LISTENER: "ListenerType",

  // Types de données de subscriber
  SUBSCRIBER: "SubscriberType",

  // Types de données de event
  EVENT: "EventType",

  // Types de données de command
  COMMAND: "CommandType",

  // Types de données de query_handler
  QUERY_HANDLER: "QueryHandlerType",

  // Types de données de command_handler
  COMMAND_HANDLER: "CommandHandlerType",

  // Types de données de message
  MESSAGE: "MessageType",

  // Types de données de messenger
  MESSENGER: "MessengerType",

  // Types de données de queue
  QUEUE: "QueueType",

  // Types de données de job
  JOB: "JobType",

  // Types de données de task
  TASK: "TaskType",

  // Types de données de worker
  WORKER: "WorkerType",

  // Types de données de scheduler
  SCHEDULER: "SchedulerType",

  // Types de données de timer
  TIMER: "TimerType",

  // Types de données de cron
  CRON: "CronType",

  // Types de données de batch
  BATCH: "BatchType",

  // Types de données de bulk
  BULK: "BulkType",

  // Types de données de stream
  STREAM: "StreamType",

  // Types de données de pipeline
  PIPELINE: "PipelineType",

  // Types de données de workflow
  WORKFLOW: "WorkflowType",

  // Types de données de state machine
  STATE_MACHINE: "StateMachineType",

  // Types de données de business process
  BUSINESS_PROCESS: "BusinessProcessType",

  // Types de données de decision
  DECISION: "DecisionType",

  // Types de données de rule
  RULE: "RuleType",

  // Types de données de policy
  POLICY: "PolicyType",

  // Types de données de permission
  PERMISSION: "PermissionType",

  // Types de données de role
  ROLE: "RoleType",

  // Types de données de user
  USER: "UserType",

  // Types de données de group
  GROUP: "GroupType",

  // Types de données de organization
  ORGANIZATION: "OrganizationType",

  // Types de données de tenant
  TENANT: "TenantType",

  // Types de données de domain
  DOMAIN: "DomainType",

  // Types de données de namespace
  NAMESPACE: "NamespaceType",

  // Types de données de module
  MODULE: "ModuleType",

  // Types de données de plugin
  PLUGIN: "PluginType",

  // Types de données de extension
  EXTENSION: "ExtensionType",

  // Types de données de bundle
  BUNDLE: "BundleType",

  // Types de données de package
  PACKAGE: "PackageType",

  // Types de données de library
  LIBRARY: "LibraryType",

  // Types de données de framework
  FRAMEWORK: "FrameworkType",

  // Types de données de application
  APPLICATION: "ApplicationType",

  // Types de données de system
  SYSTEM: "SystemType",

  // Types de données de platform
  PLATFORM: "PlatformType",

  // Types de données de environment
  ENVIRONMENT: "EnvironmentType",

  // Types de données de configuration
  CONFIGURATION: "ConfigurationType",

  // Types de données de settings
  SETTINGS: "SettingsType",

  // Types de données de preferences
  PREFERENCES: "PreferencesType",

  // Types de données de options
  OPTIONS: "OptionsType",

  // Types de données de flags
  FLAGS: "FlagsType",

  // Types de données de switches
  SWITCHES: "SwitchesType",

  // Types de données de toggles
  TOGGLES: "TogglesType",

  // Types de données de features
  FEATURES: "FeaturesType",

  // Types de données de capabilities
  CAPABILITIES: "CapabilitiesType",

  // Types de données de attributes
  ATTRIBUTES: "AttributesType",

  // Types de données de properties
  PROPERTIES: "PropertiesType",

  // Types de données de fields
  FIELDS: "FieldsType",

  // Types de données de columns
  COLUMNS: "ColumnsType",

  // Types de données de rows
  ROWS: "RowsType",

  // Types de données de records
  RECORDS: "RecordsType",

  // Types de données de entries
  ENTRIES: "EntriesType",

  // Types de données de items
  ITEMS: "ItemsType",

  // Types de données de elements
  ELEMENTS: "ElementsType",

  // Types de données de components
  COMPONENTS: "ComponentsType",

  // Types de données de widgets
  WIDGETS: "WidgetsType",

  // Types de données de controls
  CONTROLS: "ControlsType",

  // Types de données de inputs
  INPUTS: "InputsType",

  // Types de données de outputs
  OUTPUTS: "OutputsType",

  // Types de données de filters
  FILTERS: "FiltersType",

  // Types de données de searches
  SEARCHES: "SearchesType",

  // Types de données de queries
  QUERIES: "QueriesType",

  // Types de données de results
  RESULTS: "ResultsType",

  // Types de données de information
  INFORMATION: "InformationType",

  // Types de données de knowledge
  KNOWLEDGE: "KnowledgeType",

  // Types de données de intelligence
  INTELLIGENCE: "IntelligenceType",

  // Types de données de wisdom
  WISDOM: "WisdomType",

  // Types de données de insight
  INSIGHT: "InsightType",

  // Types de données de understanding
  UNDERSTANDING: "UnderstandingType",

  // Types de données de comprehension
  COMPREHENSION: "ComprehensionType",

  // Types de données de interpretation
  INTERPRETATION: "InterpretationType",

  // Types de données de analysis
  ANALYSIS: "AnalysisType",

  // Types de données de evaluation
  EVALUATION: "EvaluationType",

  // Types de données de assessment
  ASSESSMENT: "AssessmentType",

  // Types de données de measurement
  MEASUREMENT: "MeasurementType",

  // Types de données de metrics
  METRICS: "MetricsType",

  // Types de données de statistics
  STATISTICS: "StatisticsType",

  // Types de données de analytics
  ANALYTICS: "AnalyticsType",

  // Types de données de reporting
  REPORTING: "ReportingType",

  // Types de données de visualization
  VISUALIZATION: "VisualizationType",

  // Types de données de dashboard
  DASHBOARD: "DashboardType",

  // Types de données de chart
  CHART: "ChartType",

  // Types de données de graph
  GRAPH: "GraphType",

  // Types de données de diagram
  DIAGRAM: "DiagramType",

  // Types de données de map
  MAP: "MapType",

  // Types de données de location
  LOCATION: "LocationType",

  // Types de données de address
  ADDRESS: "AddressType",

  // Types de données de coordinates
  COORDINATES: "CoordinatesType",

  // Types de données de geolocation
  GEOLOCATION: "GeolocationType",

  // Types de données de geocoding
  GEOCODING: "GeocodingType",

  // Types de données de routing
  ROUTING: "RoutingType",

  // Types de données de navigation
  NAVIGATION: "NavigationType",

  // Types de données de directions
  DIRECTIONS: "DirectionsType",

  // Types de données de distance
  DISTANCE: "DistanceType",

  // Types de données de duration
  DURATION: "DurationType",

  // Types de données de speed
  SPEED: "SpeedType",

  // Types de données de velocity
  VELOCITY: "VelocityType",

  // Types de données de acceleration
  ACCELERATION: "AccelerationType",

  // Types de données de force
  FORCE: "ForceType",

  // Types de données de pressure
  PRESSURE: "PressureType",

  // Types de données de temperature
  TEMPERATURE: "TemperatureType",

  // Types de données de humidity
  HUMIDITY: "HumidityType",

  // Types de données de weather
  WEATHER: "WeatherType",

  // Types de données de climate
  CLIMATE: "ClimateType",

  // Types de données de atmosphere
  ATMOSPHERE: "AtmosphereType",

  // Types de données de air
  AIR: "AirType",

  // Types de données de water
  WATER: "WaterType",

  // Types de données de soil
  SOIL: "SoilType",

  // Types de données de earth
  EARTH: "EarthType",

  // Types de données de fire
  FIRE: "FireType",

  // Types de données de energy
  ENERGY: "EnergyType",

  // Types de données de power
  POWER: "PowerType",

  // Types de données de electricity
  ELECTRICITY: "ElectricityType",

  // Types de données de voltage
  VOLTAGE: "VoltageType",

  // Types de données de current
  CURRENT: "CurrentType",

  // Types de données de resistance
  RESISTANCE: "ResistanceType",

  // Types de données de capacitance
  CAPACITANCE: "CapacitanceType",

  // Types de données de inductance
  INDUCTANCE: "InductanceType",

  // Types de données de frequency
  FREQUENCY: "FrequencyType",

  // Types de données de wavelength
  WAVELENGTH: "WavelengthType",

  // Types de données de amplitude
  AMPLITUDE: "AmplitudeType",

  // Types de données de phase
  PHASE: "PhaseType",

  // Types de données de signal
  SIGNAL: "SignalType",

  // Types de données de noise
  NOISE: "NoiseType",

  // Types de données de interference
  INTERFERENCE: "InterferenceType",

  // Types de données de distortion
  DISTORTION: "DistortionType",

  // Types de données de quality
  QUALITY: "QualityType",

  // Types de données de reliability
  RELIABILITY: "ReliabilityType",

  // Types de données de availability
  AVAILABILITY: "AvailabilityType",

  // Types de données de durability
  DURABILITY: "DurabilityType",

  // Types de données de maintainability
  MAINTAINABILITY: "MaintainabilityType",

  // Types de données de scalability
  SCALABILITY: "ScalabilityType",

  // Types de données de flexibility
  FLEXIBILITY: "FlexibilityType",

  // Types de données de adaptability
  ADAPTABILITY: "AdaptabilityType",

  // Types de données de extensibility
  EXTENSIBILITY: "ExtensibilityType",

  // Types de données de modularity
  MODULARITY: "ModularityType",

  // Types de données de reusability
  REUSABILITY: "ReusabilityType",

  // Types de données de portability
  PORTABILITY: "PortabilityType",

  // Types de données de compatibility
  COMPATIBILITY: "CompatibilityType",

  // Types de données de interoperability
  INTEROPERABILITY: "InteroperabilityType",

  // Types de données de integration
  INTEGRATION: "IntegrationType",

  // Types de données de connectivity
  CONNECTIVITY: "ConnectivityType",

  // Types de données de network
  NETWORK: "NetworkType",

  // Types de données de protocol
  PROTOCOL: "ProtocolType",

  // Types de données de communication
  COMMUNICATION: "CommunicationType",

  // Types de données de transmission
  TRANSMISSION: "TransmissionType",

  // Types de données de reception
  RECEPTION: "ReceptionType",

  // Types de données de broadcasting
  BROADCASTING: "BroadcastingType",

  // Types de données de multicast
  MULTICAST: "MulticastType",

  // Types de données de unicast
  UNICAST: "UnicastType",

  // Types de données de anycast
  ANYCAST: "AnycastType",

  // Types de données de switching
  SWITCHING: "SwitchingType",

  // Types de données de bridging
  BRIDGING: "BridgingType",

  // Types de données de tunneling
  TUNNELING: "TunnelingType",

  // Types de données de vpn
  VPN: "VpnType",

  // Types de données de proxy
  PROXY: "ProxyType",

  // Types de données de gateway
  GATEWAY: "GatewayType",

  // Types de données de firewall
  FIREWALL: "FirewallType",

  // Types de données de security
  SECURITY: "SecurityType",

  // Types de données de encryption
  ENCRYPTION: "EncryptionType",

  // Types de données de decryption
  DECRYPTION: "DecryptionType",

  // Types de données de hashing
  HASHING: "HashingType",

  // Types de données de signature
  SIGNATURE: "SignatureType",

  // Types de données de certificate
  CERTIFICATE: "CertificateType",

  // Types de données de authentication
  AUTHENTICATION: "AuthenticationType",

  // Types de données de authorization
  AUTHORIZATION: "AuthorizationType",

  // Types de données de access control
  ACCESS_CONTROL: "AccessControlType",

  // Types de données de permissions
  PERMISSIONS: "PermissionsType",

  // Types de données de roles
  ROLES: "RolesType",

  // Types de données de users
  USERS: "UsersType",

  // Types de données de groups
  GROUPS: "GroupsType",

  // Types de données de organizations
  ORGANIZATIONS: "OrganizationsType",

  // Types de données de tenants
  TENANTS: "TenantsType",

  // Types de données de domains
  DOMAINS: "DomainsType",

  // Types de données de namespaces
  NAMESPACES: "NamespacesType",

  // Types de données de modules
  MODULES: "ModulesType",

  // Types de données de plugins
  PLUGINS: "PluginsType",

  // Types de données de extensions
  EXTENSIONS: "ExtensionsType",

  // Types de données de bundles
  BUNDLES: "BundlesType",

  // Types de données de packages
  PACKAGES: "PackagesType",

  // Types de données de libraries
  LIBRARIES: "LibrariesType",

  // Types de données de frameworks
  FRAMEWORKS: "FrameworksType",

  // Types de données de applications
  APPLICATIONS: "ApplicationsType",

  // Types de données de systems
  SYSTEMS: "SystemsType",

  // Types de données de platforms
  PLATFORMS: "PlatformsType",

  // Types de données de environments
  ENVIRONMENTS: "EnvironmentsType",

  // Types de données de configurations
  CONFIGURATIONS: "ConfigurationsType",
} as const;

// Constantes pour les noms de colonnes spéciales
export const SPECIAL_COLUMN_NAMES = {
  ID: "id",
  CREATED_AT: "created_at",
  UPDATED_AT: "updated_at",
  DELETED_AT: "deleted_at",
  VERSION: "version",
  CREATED_BY: "created_by",
  UPDATED_BY: "updated_by",
  DELETED_BY: "deleted_by",
  SLUG: "slug",
  STATUS: "status",
  POSITION: "position",
  SORT_ORDER: "sort_order",
  ACTIVE: "active",
  ENABLED: "enabled",
  VISIBLE: "visible",
  PUBLIC: "public",
  PRIVATE: "private",
  DRAFT: "draft",
  PUBLISHED: "published",
  ARCHIVED: "archived",
  LOCKED: "locked",
  FEATURED: "featured",
  PRIORITY: "priority",
  WEIGHT: "weight",
  LEVEL: "level",
  DEPTH: "depth",
  LEFT: "left",
  RIGHT: "right",
  ROOT: "root",
  PARENT: "parent",
  CHILDREN: "children",
  ANCESTORS: "ancestors",
  DESCENDANTS: "descendants",
  SIBLINGS: "siblings",
  NEXT: "next",
  PREVIOUS: "previous",
  FIRST: "first",
  LAST: "last",
  COUNT: "count",
  TOTAL: "total",
  SUM: "sum",
  AVERAGE: "average",
  MIN: "min",
  MAX: "max",
  MEDIAN: "median",
  MODE: "mode",
  VARIANCE: "variance",
  STANDARD_DEVIATION: "standard_deviation",
  RANGE: "range",
  PERCENTILE: "percentile",
  QUARTILE: "quartile",
  DECILE: "decile",
  QUINTILE: "quintile",
  TERTILE: "tertile",
  SCORE: "score",
  RATING: "rating",
  RANK: "rank",
  GRADE: "grade",
  PERCENTAGE: "percentage",
  RATIO: "ratio",
  PROPORTION: "proportion",
  FRACTION: "fraction",
  DECIMAL: "decimal",
  FLOAT: "float",
  DOUBLE: "double",
  INTEGER: "integer",
  NUMBER: "number",
  NUMERIC: "numeric",
  STRING: "string",
  TEXT: "text",
  CHAR: "char",
  VARCHAR: "varchar",
  BOOLEAN: "boolean",
  BOOL: "bool",
  DATE: "date",
  TIME: "time",
  DATETIME: "datetime",
  TIMESTAMP: "timestamp",
  TIMEZONE: "timezone",
  YEAR: "year",
  MONTH: "month",
  DAY: "day",
  HOUR: "hour",
  MINUTE: "minute",
  SECOND: "second",
  MILLISECOND: "millisecond",
  MICROSECOND: "microsecond",
  NANOSECOND: "nanosecond",
  DURATION: "duration",
  INTERVAL: "interval",
  PERIOD: "period",
  CYCLE: "cycle",
  FREQUENCY: "frequency",
  RATE: "rate",
  SPEED: "speed",
  VELOCITY: "velocity",
  ACCELERATION: "acceleration",
  FORCE: "force",
  PRESSURE: "pressure",
  TEMPERATURE: "temperature",
  HUMIDITY: "humidity",

  MASS: "mass",
  VOLUME: "volume",
  AREA: "area",
  LENGTH: "length",
  WIDTH: "width",
  HEIGHT: "height",

  RADIUS: "radius",
  DIAMETER: "diameter",
  CIRCUMFERENCE: "circumference",
  PERIMETER: "perimeter",
  ANGLE: "angle",
  DEGREES: "degrees",
  RADIANS: "radians",
  COORDINATES: "coordinates",
  LATITUDE: "latitude",
  LONGITUDE: "longitude",
  ALTITUDE: "altitude",
  ELEVATION: "elevation",
  DISTANCE: "distance",
  LOCATION: "location",
  ADDRESS: "address",
  CITY: "city",
  STATE: "state",
  COUNTRY: "country",
  POSTAL_CODE: "postal_code",
  ZIP_CODE: "zip_code",
  PHONE: "phone",
  MOBILE: "mobile",
  FAX: "fax",
  EMAIL: "email",
  WEBSITE: "website",
  URL: "url",
  URI: "uri",
  IP: "ip",
  MAC: "mac",
  UUID: "uuid",
  GUID: "guid",
  HASH: "hash",
  TOKEN: "token",
  KEY: "key",
  VALUE: "value",
  PAIR: "pair",
  MAP: "map",
  DICTIONARY: "dictionary",
  LIST: "list",
  ARRAY: "array",
  SET: "set",
  COLLECTION: "collection",
  SEQUENCE: "sequence",
  SERIES: "series",
  QUEUE: "queue",
  STACK: "stack",
  HEAP: "heap",
  TREE: "tree",
  GRAPH: "graph",
  NETWORK: "network",
  NODE: "node",
  EDGE: "edge",
  VERTEX: "vertex",
  PATH: "path",
  ROUTE: "route",
  LINK: "link",
  CONNECTION: "connection",
  RELATION: "relation",
  REFERENCE: "reference",
  POINTER: "pointer",
  INDEX: "index",
  CURSOR: "cursor",
  ITERATOR: "iterator",
  GENERATOR: "generator",
  FACTORY: "factory",
  BUILDER: "builder",
  MANAGER: "manager",
  HANDLER: "handler",
  PROCESSOR: "processor",
  CONTROLLER: "controller",
  SERVICE: "service",
  REPOSITORY: "repository",
  MODEL: "model",
  ENTITY: "entity",
  OBJECT: "object",
  CLASS: "class",
  INTERFACE: "interface",
  TRAIT: "trait",
  ABSTRACT: "abstract",
  FINAL: "final",
  STATIC: "static",
  CONST: "const",
  PROPERTY: "property",
  METHOD: "method",
  FUNCTION: "function",
  PROCEDURE: "procedure",
  ROUTINE: "routine",
  ALGORITHM: "algorithm",
  FORMULA: "formula",
  EQUATION: "equation",
  EXPRESSION: "expression",
  STATEMENT: "statement",
  DECLARATION: "declaration",
  DEFINITION: "definition",
  IMPLEMENTATION: "implementation",
  SPECIFICATION: "specification",
  DOCUMENTATION: "documentation",
  COMMENT: "comment",
  ANNOTATION: "annotation",
  METADATA: "metadata",
  ATTRIBUTE: "attribute",
  FIELD: "field",
  COLUMN: "column",
  ROW: "row",
  RECORD: "record",
  ENTRY: "entry",
  ITEM: "item",
  ELEMENT: "element",
  COMPONENT: "component",
  WIDGET: "widget",
  CONTROL: "control",
  INPUT: "input",
  OUTPUT: "output",
  PARAMETER: "parameter",
  ARGUMENT: "argument",
  VARIABLE: "variable",
  CONSTANT: "constant",
  LITERAL: "literal",
  SYMBOL: "symbol",
  IDENTIFIER: "identifier",
  NAME: "name",
  TITLE: "title",
  DESCRIPTION: "description",
  CONTENT: "content",
  BODY: "body",
  HEADER: "header",
  FOOTER: "footer",
  SIDEBAR: "sidebar",
  MENU: "menu",
  NAVIGATION: "navigation",
  BREADCRUMB: "breadcrumb",
  PAGINATION: "pagination",
  SEARCH: "search",
  FILTER: "filter",
  SORT: "sort",
  ORDER: "order",
  GROUP: "group",
  CATEGORY: "category",
  TAG: "tag",
  LABEL: "label",
  BADGE: "badge",
  ICON: "icon",
  IMAGE: "image",
  PICTURE: "picture",
  PHOTO: "photo",
  VIDEO: "video",
  AUDIO: "audio",
  MEDIA: "media",
  FILE: "file",
  DOCUMENT: "document",
  ATTACHMENT: "attachment",
  UPLOAD: "upload",
  DOWNLOAD: "download",
  IMPORT: "import",
  EXPORT: "export",
  BACKUP: "backup",
  RESTORE: "restore",
  MIGRATION: "migration",
  SYNCHRONIZATION: "synchronization",
  REPLICATION: "replication",
  CACHE: "cache",
  SESSION: "session",
  COOKIE: "cookie",
  STORAGE: "storage",
  DATABASE: "database",
  TABLE: "table",
  SCHEMA: "schema",
  VIEW: "view",

  TRIGGER: "trigger",
  EVENT: "event",
  LOG: "log",
  AUDIT: "audit",
  HISTORY: "history",
  TIMELINE: "timeline",
  CHANGELOG: "changelog",

  REVISION: "revision",
  BRANCH: "branch",
  COMMIT: "commit",
  MERGE: "merge",
  CONFLICT: "conflict",
  RESOLUTION: "resolution",
  PATCH: "patch",
  DIFF: "diff",
  COMPARISON: "comparison",
  VALIDATION: "validation",
  VERIFICATION: "verification",
  AUTHENTICATION: "authentication",
  AUTHORIZATION: "authorization",
  PERMISSION: "permission",
  ACCESS: "access",
  SECURITY: "security",
  ENCRYPTION: "encryption",
  DECRYPTION: "decryption",
  SIGNATURE: "signature",
  CERTIFICATE: "certificate",
  CREDENTIAL: "credential",
  IDENTITY: "identity",
  PROFILE: "profile",
  ACCOUNT: "account",
  USER: "user",
  ROLE: "role",

  ORGANIZATION: "organization",
  TENANT: "tenant",
  DOMAIN: "domain",
  NAMESPACE: "namespace",
  MODULE: "module",
  PLUGIN: "plugin",
  EXTENSION: "extension",
  BUNDLE: "bundle",
  PACKAGE: "package",
  LIBRARY: "library",
  FRAMEWORK: "framework",
  APPLICATION: "application",
  SYSTEM: "system",
  PLATFORM: "platform",

  CONFIGURATION: "configuration",

  PREFERENCES: "preferences",
  OPTIONS: "options",
  FLAGS: "flags",
  SWITCHES: "switches",
  TOGGLES: "toggles",
  FEATURES: "features",
  CAPABILITIES: "capabilities",
  ATTRIBUTES: "attributes",
  PROPERTIES: "properties",
  FIELDS: "fields",
  COLUMNS: "columns",
  ROWS: "rows",
  RECORDS: "records",
  ENTRIES: "entries",
  ITEMS: "items",
  ELEMENTS: "elements",
  COMPONENTS: "components",
  WIDGETS: "widgets",
  CONTROLS: "controls",
  INPUTS: "inputs",
  OUTPUTS: "outputs",
  FILTERS: "filters",
  SEARCHES: "searches",
  QUERIES: "queries",
  RESULTS: "results",
  DATA: "data",
  INFORMATION: "information",
  KNOWLEDGE: "knowledge",
  INTELLIGENCE: "intelligence",
  WISDOM: "wisdom",
  INSIGHT: "insight",
  UNDERSTANDING: "understanding",
  COMPREHENSION: "comprehension",
  INTERPRETATION: "interpretation",
  ANALYSIS: "analysis",
  EVALUATION: "evaluation",
  ASSESSMENT: "assessment",
  MEASUREMENT: "measurement",
  METRICS: "metrics",
  STATISTICS: "statistics",
  ANALYTICS: "analytics",
  REPORTING: "reporting",
  VISUALIZATION: "visualization",
  DASHBOARD: "dashboard",
  CHART: "chart",

  DIAGRAM: "diagram",

  GEOLOCATION: "geolocation",
  GEOCODING: "geocoding",
  ROUTING: "routing",
  DIRECTIONS: "directions",
  WEATHER: "weather",
  CLIMATE: "climate",
  ENVIRONMENT: "environment",
  ATMOSPHERE: "atmosphere",
  AIR: "air",
  WATER: "water",
  SOIL: "soil",
  EARTH: "earth",
  FIRE: "fire",
  ENERGY: "energy",
  POWER: "power",
  ELECTRICITY: "electricity",
  VOLTAGE: "voltage",
  CURRENT: "current",
  RESISTANCE: "resistance",
  CAPACITANCE: "capacitance",
  INDUCTANCE: "inductance",
  WAVELENGTH: "wavelength",
  AMPLITUDE: "amplitude",
  PHASE: "phase",
  SIGNAL: "signal",
  NOISE: "noise",
  INTERFERENCE: "interference",
  DISTORTION: "distortion",
  QUALITY: "quality",
  RELIABILITY: "reliability",
  AVAILABILITY: "availability",
  DURABILITY: "durability",
  MAINTAINABILITY: "maintainability",
  SCALABILITY: "scalability",
  FLEXIBILITY: "flexibility",
  ADAPTABILITY: "adaptability",
  EXTENSIBILITY: "extensibility",
  MODULARITY: "modularity",
  REUSABILITY: "reusability",
  PORTABILITY: "portability",
  COMPATIBILITY: "compatibility",
  INTEROPERABILITY: "interoperability",
  INTEGRATION: "integration",
  CONNECTIVITY: "connectivity",
  PROTOCOL: "protocol",
  COMMUNICATION: "communication",
  TRANSMISSION: "transmission",
  RECEPTION: "reception",
  BROADCASTING: "broadcasting",
  MULTICAST: "multicast",
  UNICAST: "unicast",
  ANYCAST: "anycast",
  SWITCHING: "switching",
  BRIDGING: "bridging",
  TUNNELING: "tunneling",
  VPN: "vpn",
  PROXY: "proxy",
  GATEWAY: "gateway",
  FIREWALL: "firewall",

  HASHING: "hashing",

  ACCESS_CONTROL: "access_control",
  PERMISSIONS: "permissions",
  ROLES: "roles",
  USERS: "users",
  GROUPS: "groups",
  ORGANIZATIONS: "organizations",
  TENANTS: "tenants",
  DOMAINS: "domains",
  NAMESPACES: "namespaces",
  MODULES: "modules",
  PLUGINS: "plugins",
  EXTENSIONS: "extensions",
  BUNDLES: "bundles",
  PACKAGES: "packages",
  LIBRARIES: "libraries",
  FRAMEWORKS: "frameworks",
  APPLICATIONS: "applications",
  SYSTEMS: "systems",
  PLATFORMS: "platforms",
  ENVIRONMENTS: "environments",
  CONFIGURATIONS: "configurations",
  SETTINGS: "settings",
} as const;
export interface ConstraintMeta {
  categorie: string;
  type: string;
  implantation: string;
  attribute: string;
  proprietes: Record<string, any>;
}

export function getContraintTypeORM(type: string): ConstraintMeta | null {
  const Mapping: Record<string, ConstraintMeta> = {
    // ------------- BASIC -------------
    blank: {
      categorie: "Basic",
      type: "String",
      implantation: "#[Assert\\Blank]",
      attribute: "public ?string $internalNote = null;",
      proprietes: {},
    },
    isfalse: {
      categorie: "Basic",
      type: "Boolean",
      implantation:
        '#[Assert\\IsFalse(message: "Cette valeur doit être false.")]',
      attribute: "public ?bool $archived = null;",
      proprietes: {
        message: "Cette valeur doit être false.",
      },
    },
    isnull: {
      categorie: "Basic",
      type: "Mixed",
      implantation: '#[Assert\\IsNull(message: "La valeur doit être nulle.")]',
      attribute: "public mixed $legacyValue = null;",
      proprietes: {
        message: "La valeur doit être nulle.",
      },
    },
    istrue: {
      categorie: "Basic",
      type: "Boolean",
      implantation:
        '#[Assert\\IsTrue(message: "Vous devez accepter les conditions générales.")]',
      attribute: "public ?bool $termsAccepted = null;",
      proprietes: {
        message: "Vous devez accepter les conditions générales.",
      },
    },
    notblank: {
      categorie: "Basic",
      type: "String",
      implantation:
        '#[Assert\\NotBlank(message: "Ce champ ne doit pas être vide.")]',
      attribute: "public ?string $name = null;",
      proprietes: {
        message: "Ce champ ne doit pas être vide.",
      },
    },
    notnull: {
      categorie: "Basic",
      type: "Mixed",
      implantation:
        '#[Assert\\NotNull(message: "Cette valeur ne doit pas être nulle.")]',
      attribute: "public mixed $price = null;",
      proprietes: {
        message: "Cette valeur ne doit pas être nulle.",
      },
    },
    type: {
      categorie: "Basic",
      type: "Mixed",
      implantation:
        '#[Assert\\Type(type: "int", message: "Cette valeur doit être du type {{ type }}.")]',
      attribute: "public mixed $quantity;",
      proprietes: {
        type: "int",
        message: "Cette valeur doit être du type {{ type }}.",
      },
    },

    // ------------- STRING -------------
    charset: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Charset(charset: "UTF-8", message: "Cette chaîne doit être encodée en {{ charset }}.")]',
      attribute: "public ?string $description = null;",
      proprietes: {
        charset: "UTF-8",
        message: "Cette chaîne doit être encodée en {{ charset }}.",
      },
    },
    cidr: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Cidr(message: "Cette valeur doit être un CIDR valide.")]',
      attribute: "public ?string $subnet = null;",
      proprietes: {
        message: "Cette valeur doit être un CIDR valide.",
      },
    },
    csscolor: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\CssColor(message: "Cette valeur doit être une couleur CSS valide.")]',
      attribute: "public ?string $primaryColor = null;",
      proprietes: {
        message: "Cette valeur doit être une couleur CSS valide.",
      },
    },
    email: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Email(mode: "html5", message: "Cette valeur n’est pas une adresse email valide.")]',
      attribute: "public ?string $email = null;",
      proprietes: {
        mode: "html5",
        message: "Cette valeur n’est pas une adresse email valide.",
      },
    },
    expressionsyntax: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\ExpressionSyntax(message: "Cette expression n’est pas syntaxiquement valide.")]',
      attribute: "public ?string $filterExpression = null;",
      proprietes: {
        message: "Cette expression n’est pas syntaxiquement valide.",
      },
    },
    hostname: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Hostname(message: "Ce nom d’hôte n’est pas valide.")]',
      attribute: "public ?string $domain = null;",
      proprietes: {
        message: "Ce nom d’hôte n’est pas valide.",
      },
    },
    ip: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Ip(version: "all", message: "Cette valeur n’est pas une adresse IP valide.")]',
      attribute: "public ?string $ip = null;",
      proprietes: {
        version: "all",
        message: "Cette valeur n’est pas une adresse IP valide.",
      },
    },
    json: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Json(message: "Cette valeur doit être une chaîne JSON valide.")]',
      attribute: "public ?string $payload = null;",
      proprietes: {
        message: "Cette valeur doit être une chaîne JSON valide.",
      },
    },
    length: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Length(min: 3, max: 50, minMessage: "Le titre doit avoir au moins {{ limit }} caractères.", maxMessage: "Le titre doit avoir au plus {{ limit }} caractères.")]',
      attribute: "public ?string $title = null;",
      proprietes: {
        min: 3,
        minMessage: "Le titre doit avoir au moins {{ limit }} caractères.",
        max: 50,
        maxMessage: "Le titre doit avoir au plus {{ limit }} caractères.",
      },
    },
    macaddress: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\MacAddress(message: "Cette valeur doit être une adresse MAC valide.")]',
      attribute: "public ?string $mac = null;",
      proprietes: {
        message: "Cette valeur doit être une adresse MAC valide.",
      },
    },
    nosuspiciouscharacters: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\NoSuspiciousCharacters(message: "Cette valeur contient des caractères suspects.")]',
      attribute: "public ?string $comment = null;",
      proprietes: {
        message: "Cette valeur contient des caractères suspects.",
      },
    },
    notcompromisedpassword: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\NotCompromisedPassword(message: "Ce mot de passe a été compromis dans une fuite de données.")]',
      attribute: "public ?string $plainPassword = null;",
      proprietes: {
        message: "Ce mot de passe a été compromis dans une fuite de données.",
      },
    },
    passwordstrength: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\PasswordStrength(minScore: Assert\\PasswordStrength::STRENGTH_MEDIUM, message: "Ce mot de passe est trop faible.")]',
      attribute: "public ?string $securePassword = null;",
      proprietes: {
        minScore: "medium",
        message: "Ce mot de passe est trop faible.",
      },
    },
    regex: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Regex(pattern: "/^[a-z0-9_]+$/i", htmlPattern: "^[a-zA-Z0-9_]+$", message: "Ce champ ne peut contenir que des lettres, chiffres et underscores.")]',
      attribute: "public ?string $username = null;",
      proprietes: {
        pattern: "^[a-z0-9_]+$",
        htmlPattern: "^[a-zA-Z0-9_]+$",
        message:
          "Ce champ ne peut contenir que des lettres, chiffres et underscores.",
      },
    },
    twig: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Twig(message: "Ce template Twig n’est pas valide.")]',
      attribute: "public ?string $twigTemplate = null;",
      proprietes: {
        message: "Ce template Twig n’est pas valide.",
      },
    },
    ulid: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Ulid(message: "Cette valeur n’est pas un ULID valide.")]',
      attribute: "public ?string $ulid = null;",
      proprietes: {
        message: "Cette valeur n’est pas un ULID valide.",
      },
    },
    url: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Url(message: "Cette valeur n’est pas une URL valide.")]',
      attribute: "public ?string $website = null;",
      proprietes: {
        message: "Cette valeur n’est pas une URL valide.",
      },
    },
    userpassword: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\UserPassword(message: "Le mot de passe actuel est incorrect.")]',
      attribute: "public ?string $currentPassword = null;",
      proprietes: {
        message: "Le mot de passe actuel est incorrect.",
      },
    },
    uuid: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Uuid(message: "Cette valeur n’est pas un UUID valide.")]',
      attribute: "public ?string $uuid = null;",
      proprietes: {
        message: "Cette valeur n’est pas un UUID valide.",
      },
    },
    wordcount: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\WordCount(max: 100, maxMessage: "Ce texte doit contenir au plus {{ limit }} mots.")]',
      attribute: "public ?string $summary = null;",
      proprietes: {
        max: 100,
        maxMessage: "Ce texte doit contenir au plus {{ limit }} mots.",
      },
    },
    yaml: {
      categorie: "String",
      type: "String",
      implantation:
        '#[Assert\\Yaml(message: "Cette valeur doit être un YAML valide.")]',
      attribute: "public ?string $yamlConfig = null;",
      proprietes: {
        message: "Cette valeur doit être un YAML valide.",
      },
    },

    // ------------- COMPARISON -------------
    divisibleby: {
      categorie: "Comparison",
      type: "Number",
      implantation:
        '#[Assert\\DivisibleBy(value: 5, message: "Cette valeur doit être un multiple de {{ value }}.")]',
      attribute: "public ?int $packSize = null;",
      proprietes: {
        value: 5,
        message: "Cette valeur doit être un multiple de {{ value }}.",
      },
    },
    equalto: {
      categorie: "Comparison",
      type: "Number",
      implantation:
        '#[Assert\\EqualTo(value: 100, message: "Cette valeur doit être égale à {{ compared_value }}.")]',
      attribute: "public ?int $fixedScore = null;",
      proprietes: {
        value: 100,
        message: "Cette valeur doit être égale à {{ compared_value }}.",
      },
    },
    greaterthan: {
      categorie: "Comparison",
      type: "Number",
      implantation:
        '#[Assert\\GreaterThan(value: 0, message: "Cette valeur doit être supérieure à {{ compared_value }}.")]',
      attribute: "public ?float $amount = null;",
      proprietes: {
        value: 0,
        message: "Cette valeur doit être supérieure à {{ compared_value }}.",
      },
    },
    greaterthanorequal: {
      categorie: "Comparison",
      type: "Number",
      implantation:
        '#[Assert\\GreaterThanOrEqual(value: 18, message: "Cette valeur doit être supérieure ou égale à {{ compared_value }}.")]',
      attribute: "public ?int $age = null;",
      proprietes: {
        value: 18,
        message:
          "Cette valeur doit être supérieure ou égale à {{ compared_value }}.",
      },
    },
    identicalto: {
      categorie: "Comparison",
      type: "Mixed",
      implantation:
        '#[Assert\\IdenticalTo(value: 1, message: "Cette valeur doit être strictement identique à {{ compared_value }}.")]',
      attribute: "public mixed $flag;",
      proprietes: {
        value: 1,
        message:
          "Cette valeur doit être strictement identique à {{ compared_value }}.",
      },
    },
    lessthan: {
      categorie: "Comparison",
      type: "Number",
      implantation:
        '#[Assert\\LessThan(value: 100, message: "Cette valeur doit être inférieure à {{ compared_value }}.")]',
      attribute: "public ?int $score = null;",
      proprietes: {
        value: 100,
        message: "Cette valeur doit être inférieure à {{ compared_value }}.",
      },
    },
    lessthanorequal: {
      categorie: "Comparison",
      type: "Number",
      implantation:
        '#[Assert\\LessThanOrEqual(value: 1000, message: "Cette valeur doit être inférieure ou égale à {{ compared_value }}.")]',
      attribute: "public ?float $total = null;",
      proprietes: {
        value: 1000,
        message:
          "Cette valeur doit être inférieure ou égale à {{ compared_value }}.",
      },
    },
    notequalto: {
      categorie: "Comparison",
      type: "Number",
      implantation:
        '#[Assert\\NotEqualTo(value: 0, message: "Cette valeur ne doit pas être égale à {{ compared_value }}.")]',
      attribute: "public ?int $divider = null;",
      proprietes: {
        value: 0,
        message: "Cette valeur ne doit pas être égale à {{ compared_value }}.",
      },
    },
    notidenticalto: {
      categorie: "Comparison",
      type: "Mixed",
      implantation:
        '#[Assert\\NotIdenticalTo(value: "admin", message: "Cette valeur ne doit pas être strictement identique à {{ compared_value }}.")]',
      attribute: "public ?string $login = null;",
      proprietes: {
        value: "admin",
        message:
          "Cette valeur ne doit pas être strictement identique à {{ compared_value }}.",
      },
    },
    range: {
      categorie: "Comparison",
      type: "Number",
      implantation:
        '#[Assert\\Range(min: 1, max: 5, notInRangeMessage: "Cette valeur doit être comprise entre {{ min }} et {{ max }}.")]',
      attribute: "public ?int $rating = null;",
      proprietes: {
        min: 1,
        max: 5,
        notInRangeMessage:
          "Cette valeur doit être comprise entre {{ min }} et {{ max }}.",
      },
    },
    unique: {
      categorie: "Comparison",
      type: "Array",
      implantation:
        '#[Assert\\Unique(message: "Les éléments doivent être tous différents.")]',
      attribute: "public array $tags = [];",
      proprietes: {
        message: "Les éléments doivent être tous différents.",
      },
    },

    // ------------- NUMBER -------------
    negative: {
      categorie: "Number",
      type: "Number",
      implantation:
        '#[Assert\\Negative(message: "Cette valeur doit être strictement négative.")]',
      attribute: "public ?int $negativeBalance = null;",
      proprietes: {
        message: "Cette valeur doit être strictement négative.",
      },
    },
    negativeorzero: {
      categorie: "Number",
      type: "Number",
      implantation:
        '#[Assert\\NegativeOrZero(message: "Cette valeur doit être négative ou nulle.")]',
      attribute: "public ?float $balance = null;",
      proprietes: {
        message: "Cette valeur doit être négative ou nulle.",
      },
    },
    positive: {
      categorie: "Number",
      type: "Number",
      implantation:
        '#[Assert\\Positive(message: "Cette valeur doit être strictement positive.")]',
      attribute: "public ?int $itemsCount = null;",
      proprietes: {
        message: "Cette valeur doit être strictement positive.",
      },
    },
    positiveorzero: {
      categorie: "Number",
      type: "Number",
      implantation:
        '#[Assert\\PositiveOrZero(message: "Cette valeur doit être positive ou nulle.")]',
      attribute: "public ?int $stock = null;",
      proprietes: {
        message: "Cette valeur doit être positive ou nulle.",
      },
    },

    // ------------- DATE -------------
    date: {
      categorie: "Date",
      type: "String",
      implantation:
        '#[Assert\\Date(message: "Cette valeur n’est pas une date valide.")]',
      attribute: "public ?string $publishDate = null;",
      proprietes: {
        message: "Cette valeur n’est pas une date valide.",
      },
    },
    datetime: {
      categorie: "Date",
      type: "String",
      implantation:
        '#[Assert\\DateTime(message: "Cette valeur n’est pas une date/heure valide.")]',
      attribute: "public ?string $scheduledAt = null;",
      proprietes: {
        message: "Cette valeur n’est pas une date/heure valide.",
      },
    },
    time: {
      categorie: "Date",
      type: "String",
      implantation:
        '#[Assert\\Time(message: "Cette valeur n’est pas une heure valide.")]',
      attribute: "public ?string $openingTime = null;",
      proprietes: {
        message: "Cette valeur n’est pas une heure valide.",
      },
    },
    timezone: {
      categorie: "Date",
      type: "String",
      implantation:
        '#[Assert\\Timezone(message: "Ce fuseau horaire n’est pas valide.")]',
      attribute: "public ?string $timezone = null;",
      proprietes: {
        message: "Ce fuseau horaire n’est pas valide.",
      },
    },
    week: {
      categorie: "Date",
      type: "String",
      implantation:
        '#[Assert\\Week(message: "Cette valeur doit être une semaine ISO valide (YYYY-Www).")]',
      attribute: "public ?string $isoWeek = null;",
      proprietes: {
        message: "Cette valeur doit être une semaine ISO valide (YYYY-Www).",
      },
    },

    // ------------- CHOICE -------------
    choice: {
      categorie: "Choice",
      type: "Mixed",
      implantation:
        '#[Assert\\Choice(choices: ["draft", "published", "archived"], message: "Cette valeur n’est pas un choix valide.")]',
      attribute: "public ?string $status = null;",
      proprietes: {
        choices: ["draft", "published", "archived"],
        message: "Cette valeur n’est pas un choix valide.",
      },
    },
    country: {
      categorie: "Choice",
      type: "String",
      implantation:
        '#[Assert\\Country(message: "Ce code pays n’est pas valide.")]',
      attribute: "public ?string $countryCode = null;",
      proprietes: {
        message: "Ce code pays n’est pas valide.",
      },
    },
    language: {
      categorie: "Choice",
      type: "String",
      implantation:
        '#[Assert\\Language(message: "Ce code langue n’est pas valide.")]',
      attribute: "public ?string $languageCode = null;",
      proprietes: {
        message: "Ce code langue n’est pas valide.",
      },
    },
    locale: {
      categorie: "Choice",
      type: "String",
      implantation: '#[Assert\\Locale(message: "Ce locale n’est pas valide.")]',
      attribute: "public ?string $locale = null;",
      proprietes: {
        message: "Ce locale n’est pas valide.",
      },
    },

    // ------------- FILE -------------
    file: {
      categorie: "File",
      type: "File",
      implantation:
        '#[Assert\\File(maxSize: "5M", mimeTypes: ["application/pdf"], maxSizeMessage: "Le fichier est trop volumineux ({{ size }} {{ suffix }}). Taille maximum : {{ limit }} {{ suffix }}.", mimeTypesMessage: "Ce type de fichier n’est pas autorisé.")]',
      attribute:
        "public ?\\Symfony\\Component\\HttpFoundation\\File\\File $contractFile = null;",
      proprietes: {
        maxSize: "5M",
        mimeTypes: ["application/pdf"],
        maxSizeMessage:
          "Le fichier est trop volumineux ({{ size }} {{ suffix }}). Taille maximum : {{ limit }} {{ suffix }}.",
        mimeTypesMessage: "Ce type de fichier n’est pas autorisé.",
      },
    },
    image: {
      categorie: "File",
      type: "File",
      implantation:
        '#[Assert\\Image(maxSize: "2M", mimeTypes: ["image/jpeg", "image/png"], mimeTypesMessage: "Seules les images JPEG ou PNG sont autorisées.")]',
      attribute:
        "public ?\\Symfony\\Component\\HttpFoundation\\File\\File $avatar = null;",
      proprietes: {
        maxSize: "2M",
        mimeTypes: ["image/jpeg", "image/png"],
        mimeTypesMessage: "Seules les images JPEG ou PNG sont autorisées.",
      },
    },
    video: {
      categorie: "File",
      type: "File",
      implantation:
        '#[Assert\\Video(maxSize: "100M", maxWidth: 1920, maxHeight: 1080, mimeTypes: ["video/mp4", "video/webm"], mimeTypesMessage: "Ce type de fichier vidéo n’est pas autorisé.")]',
      attribute:
        "public ?\\Symfony\\Component\\HttpFoundation\\File\\File $videoFile = null;",
      proprietes: {
        maxSize: "100M",
        maxWidth: 1920,
        maxHeight: 1080,
        mimeTypes: ["video/mp4", "video/webm"],
        mimeTypesMessage: "Ce type de fichier vidéo n’est pas autorisé.",
      },
    },

    // ------------- FINANCIAL -------------
    bic: {
      categorie: "Financial",
      type: "String",
      implantation: '#[Assert\\Bic(message: "Ce code BIC n’est pas valide.")]',
      attribute: "public ?string $bic = null;",
      proprietes: {
        message: "Ce code BIC n’est pas valide.",
      },
    },
    cardscheme: {
      categorie: "Financial",
      type: "String",
      implantation:
        '#[Assert\\CardScheme(schemes: ["VISA", "MASTERCARD"], message: "Ce numéro de carte n’est pas valide ou le réseau n’est pas accepté.")]',
      attribute: "public ?string $creditCardNumber = null;",
      proprietes: {
        schemes: ["VISA", "MASTERCARD"],
        message:
          "Ce numéro de carte n’est pas valide ou le réseau n’est pas accepté.",
      },
    },
    currency: {
      categorie: "Financial",
      type: "String",
      implantation:
        '#[Assert\\Currency(message: "Ce code de devise n’est pas valide.")]',
      attribute: "public ?string $currency = null;",
      proprietes: {
        message: "Ce code de devise n’est pas valide.",
      },
    },
    iban: {
      categorie: "Financial",
      type: "String",
      implantation:
        '#[Assert\\Iban(message: "Ce numéro IBAN n’est pas valide.")]',
      attribute: "public ?string $iban = null;",
      proprietes: {
        message: "Ce numéro IBAN n’est pas valide.",
      },
    },
    isbn: {
      categorie: "Financial",
      type: "String",
      implantation:
        '#[Assert\\Isbn(type: "isbn13", message: "Ce code ISBN n’est pas valide.")]',
      attribute: "public ?string $isbn = null;",
      proprietes: {
        type: "isbn13",
        message: "Ce code ISBN n’est pas valide.",
      },
    },
    isin: {
      categorie: "Financial",
      type: "String",
      implantation:
        '#[Assert\\Isin(message: "Ce code ISIN n’est pas valide.")]',
      attribute: "public ?string $isin = null;",
      proprietes: {
        message: "Ce code ISIN n’est pas valide.",
      },
    },
    issn: {
      categorie: "Financial",
      type: "String",
      implantation:
        '#[Assert\\Issn(message: "Ce code ISSN n’est pas valide.")]',
      attribute: "public ?string $issn = null;",
      proprietes: {
        message: "Ce code ISSN n’est pas valide.",
      },
    },
    luhn: {
      categorie: "Financial",
      type: "String",
      implantation:
        '#[Assert\\Luhn(message: "Ce numéro n’est pas valide (échec de la vérification Luhn).")]',
      attribute: "public ?string $luhnNumber = null;",
      proprietes: {
        message: "Ce numéro n’est pas valide (échec de la vérification Luhn).",
      },
    },

    // ------------- DOCTRINE -------------
    disableautomapping: {
      categorie: "Doctrine",
      type: "Class",
      implantation:
        "#[\\Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\DisableAutoMapping]",
      attribute: "class LegacyDto {}",
      proprietes: {},
    },
    enableautomapping: {
      categorie: "Doctrine",
      type: "Class",
      implantation:
        "#[\\Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\EnableAutoMapping]",
      attribute: "class Product {}",
      proprietes: {},
    },
    uniqueentity: {
      categorie: "Doctrine",
      type: "Class",
      implantation:
        '#[\\Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\UniqueEntity(fields: ["email"], message: "Cet email est déjà utilisé.")]',
      attribute: "class User {}",
      proprietes: {
        fields: ["email"],
        message: "Cet email est déjà utilisé.",
      },
    },

    // ------------- OTHER / STRUCTURE -------------
    all: {
      categorie: "Other",
      type: "Array",
      implantation:
        "#[Assert\\All(constraints: [new Assert\\NotBlank(), new Assert\\Length(min: 2)])]",
      attribute: "public array $labels = [];",
      proprietes: {
        constraints: [
          "new Assert\\\\NotBlank()",
          "new Assert\\\\Length(min: 2)",
        ],
      },
    },
    atleastoneof: {
      categorie: "Other",
      type: "Mixed",
      implantation:
        '#[Assert\\AtLeastOneOf(constraints: [new Assert\\Email(), new Assert\\Regex(pattern: "/^\\+?\\d+$/")], message: "Cette valeur doit être un email valide ou un numéro de téléphone.")]',
      attribute: "public ?string $contact = null;",
      proprietes: {
        constraints: [
          "new Assert\\\\Email()",
          "new Assert\\\\Regex(pattern: '/^\\\\+?\\\\d+$/')",
        ],
        message:
          "Cette valeur doit être un email valide ou un numéro de téléphone.",
      },
    },
    callback: {
      categorie: "Other",
      type: "Class",
      implantation: "#[Assert\\Callback]",
      attribute:
        "public function validate(\\Symfony\\Component\\Validator\\Context\\ExecutionContextInterface $context): void {}",
      proprietes: {},
    },
    cascade: {
      categorie: "Other",
      type: "Object",
      implantation: "#[Assert\\Cascade]",
      attribute: "public ?Address $address = null;",
      proprietes: {},
    },
    collection: {
      categorie: "Other",
      type: "Array",
      implantation:
        '#[Assert\\Collection(fields: ["street" => new Assert\\NotBlank(), "zipCode" => new Assert\\Length(min: 4, max: 10), "city" => new Assert\\NotBlank()], allowExtraFields: false)]',
      attribute: "public array $addressData = [];",
      proprietes: {
        fields: {
          street: "new Assert\\\\NotBlank()",
          zipCode: "new Assert\\\\Length(min: 4, max: 10)",
          city: "new Assert\\\\NotBlank()",
        },
        allowExtraFields: false,
      },
    },
    compound: {
      categorie: "Other",
      type: "Custom",
      implantation: "// Contrainte personnalisée étendant Assert\\\\Compound",
      attribute: "class StrongPassword extends Assert\\\\Compound {}",
      proprietes: {},
    },
    count: {
      categorie: "Other",
      type: "Array",
      implantation:
        '#[Assert\\Count(min: 1, max: 10, minMessage: "Vous devez sélectionner au moins {{ limit }} élément.", maxMessage: "Vous ne pouvez pas sélectionner plus de {{ limit }} éléments.")]',
      attribute: "public array $items = [];",
      proprietes: {
        min: 1,
        max: 10,
        minMessage: "Vous devez sélectionner au moins {{ limit }} élément.",
        maxMessage:
          "Vous ne pouvez pas sélectionner plus de {{ limit }} éléments.",
      },
    },
    expression: {
      categorie: "Other",
      type: "Class",
      implantation:
        '#[Assert\\Expression(expression: "this.minPrice <= this.maxPrice", message: "Le prix minimum doit être inférieur ou égal au prix maximum.")]',
      attribute: "public bool $validPriceRange = true;",
      proprietes: {
        expression: "this.minPrice <= this.maxPrice",
        message: "Le prix minimum doit être inférieur ou égal au prix maximum.",
      },
    },
    groupsequence: {
      categorie: "Other",
      type: "Class",
      implantation: '#[Assert\\GroupSequence(["Default", "Strict")] ]',
      attribute: "class Registration {}",
      proprietes: {
        groups: ["Default", "Strict"],
      },
    },
    sequentially: {
      categorie: "Other",
      type: "Mixed",
      implantation:
        "#[Assert\\Sequentially([new Assert\\NotBlank(), new Assert\\Length(min: 5)])]",
      attribute: "public ?string $serialKey = null;",
      proprietes: {
        constraints: [
          "new Assert\\\\NotBlank()",
          "new Assert\\\\Length(min: 5)",
        ],
      },
    },
    traverse: {
      categorie: "Other",
      type: "Class",
      implantation: "#[Assert\\Traverse]",
      attribute: "public array $config = [];",
      proprietes: {},
    },
    valid: {
      categorie: "Other",
      type: "Object",
      implantation: "#[Assert\\Valid]",
      attribute: "public ?Profile $profile = null;",
      proprietes: {},
    },
    when: {
      categorie: "Other",
      type: "Mixed",
      implantation:
        "#[Assert\\When(expression: \"this.type === 'percent'\", constraints: [new Assert\\Range(min: 1, max: 100)], otherwise: [new Assert\\GreaterThan(0)])]",
      attribute: "public ?int $discountValue = null;",
      proprietes: {
        expression: "this.type === 'percent'",
        constraints: ["new Assert\\\\Range(min: 1, max: 100)"],
        otherwise: ["new Assert\\\\GreaterThan(0)"],
      },
    },
  };

  return Mapping[type.toLowerCase()] ?? null;
}

export const SYMFONY_CONTRAINTS = [
  {
    Blank: {
      categorie: "Basic",
      type: "String",
      implantation: "#[Assert\\Blank]",
      attribute: "public ?string $internalNote = null;",
      proprietes: {},
    },
    IsFalse: {
      categorie: "Basic",
      type: "Boolean",
      implantation: "#[Assert\\IsFalse( proprietes )]",
      attribute: "public ?bool $archived = null;",
      proprietes: {
        message: "Cette valeur doit être false.",
      },
    },
    IsNull: {
      categorie: "Basic",
      type: "Mixed",
      implantation: "#[Assert\\IsNull( proprietes )]",
      attribute: "public mixed $legacyValue = null;",
      proprietes: {
        message: "La valeur doit être nulle.",
      },
    },
    IsTrue: {
      categorie: "Basic",
      type: "Boolean",
      implantation: "#[Assert\\IsTrue( proprietes )]",
      attribute: "public ?bool $termsAccepted = null;",
      proprietes: {
        message: "Vous devez accepter les conditions générales.",
      },
    },
    NotBlank: {
      categorie: "Basic",
      type: "String",
      implantation: "#[Assert\\NotBlank( proprietes )]",
      attribute: "public ?string $name = null;",
      proprietes: {
        message: "Ce champ ne doit pas être vide.",
      },
    },
    NotNull: {
      categorie: "Basic",
      type: "Mixed",
      implantation: "#[Assert\\NotNull( proprietes )]",
      attribute: "public mixed $price = null;",
      proprietes: {
        message: "Cette valeur ne doit pas être nulle.",
      },
    },
    Type: {
      categorie: "Basic",
      type: "Mixed",
      implantation: "#[Assert\\Type( proprietes )]",
      attribute: "public mixed $quantity;",
      proprietes: {
        type: "int",
        message: "Cette valeur doit être du type {{ type }}.",
      },
    },

    Charset: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Charset( proprietes )]",
      attribute: "public ?string $description = null;",
      proprietes: {
        charset: "UTF-8",
        message: "Cette chaîne doit être encodée en {{ charset }}.",
      },
    },
    Cidr: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Cidr( proprietes )]",
      attribute: "public ?string $subnet = null;",
      proprietes: {
        message: "Cette valeur doit être un CIDR valide.",
      },
    },
    CssColor: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\CssColor( proprietes )]",
      attribute: "public ?string $primaryColor = null;",
      proprietes: {
        message: "Cette valeur doit être une couleur CSS valide.",
      },
    },
    Email: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Email( proprietes )]",
      attribute: "public ?string $email = null;",
      proprietes: {
        mode: "html5",
        message: "Cette valeur n’est pas une adresse email valide.",
      },
    },
    ExpressionSyntax: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\ExpressionSyntax( proprietes )]",
      attribute: "public ?string $filterExpression = null;",
      proprietes: {
        message: "Cette expression n’est pas syntaxiquement valide.",
      },
    },
    Hostname: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Hostname( proprietes )]",
      attribute: "public ?string $domain = null;",
      proprietes: {
        message: "Ce nom d’hôte n’est pas valide.",
      },
    },
    Ip: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Ip( proprietes )]",
      attribute: "public ?string $ip = null;",
      proprietes: {
        version: "all",
        message: "Cette valeur n’est pas une adresse IP valide.",
      },
    },
    Json: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Json( proprietes )]",
      attribute: "public ?string $payload = null;",
      proprietes: {
        message: "Cette valeur doit être une chaîne JSON valide.",
      },
    },
    Length: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Length( proprietes )]",
      attribute: "public ?string $title = null;",
      proprietes: {
        min: 3,
        minMessage: "Le titre doit avoir au moins {{ limit }} caractères.",
        max: 50,
        maxMessage: "Le titre doit avoir au plus {{ limit }} caractères.",
      },
    },
    MacAddress: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\MacAddress( proprietes )]",
      attribute: "public ?string $mac = null;",
      proprietes: {
        message: "Cette valeur doit être une adresse MAC valide.",
      },
    },
    NoSuspiciousCharacters: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\NoSuspiciousCharacters( proprietes )]",
      attribute: "public ?string $comment = null;",
      proprietes: {
        message: "Cette valeur contient des caractères suspects.",
      },
    },
    NotCompromisedPassword: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\NotCompromisedPassword( proprietes )]",
      attribute: "public ?string $plainPassword = null;",
      proprietes: {
        message: "Ce mot de passe a été compromis dans une fuite de données.",
      },
    },
    PasswordStrength: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\PasswordStrength( proprietes )]",
      attribute: "public ?string $securePassword = null;",
      proprietes: {
        minScore: "medium",
        message: "Ce mot de passe est trop faible.",
      },
    },
    Regex: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Regex( proprietes )]",
      attribute: "public ?string $username = null;",
      proprietes: {
        pattern: "^[a-z0-9_]+$",
        htmlPattern: "^[a-zA-Z0-9_]+$",
        message:
          "Ce champ ne peut contenir que des lettres, chiffres et underscores.",
      },
    },
    Twig: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Twig( proprietes )]",
      attribute: "public ?string $twigTemplate = null;",
      proprietes: {
        message: "Ce template Twig n’est pas valide.",
      },
    },
    Ulid: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Ulid( proprietes )]",
      attribute: "public ?string $ulid = null;",
      proprietes: {
        message: "Cette valeur n’est pas un ULID valide.",
      },
    },
    Url: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Url( proprietes )]",
      attribute: "public ?string $website = null;",
      proprietes: {
        message: "Cette valeur n’est pas une URL valide.",
      },
    },
    UserPassword: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\UserPassword( proprietes )]",
      attribute: "public ?string $currentPassword = null;",
      proprietes: {
        message: "Le mot de passe actuel est incorrect.",
      },
    },
    Uuid: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Uuid( proprietes )]",
      attribute: "public ?string $uuid = null;",
      proprietes: {
        message: "Cette valeur n’est pas un UUID valide.",
      },
    },
    WordCount: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\WordCount( proprietes )]",
      attribute: "public ?string $summary = null;",
      proprietes: {
        max: 100,
        maxMessage: "Ce texte doit contenir au plus {{ limit }} mots.",
      },
    },
    Yaml: {
      categorie: "String",
      type: "String",
      implantation: "#[Assert\\Yaml( proprietes )]",
      attribute: "public ?string $yamlConfig = null;",
      proprietes: {
        message: "Cette valeur doit être un YAML valide.",
      },
    },

    DivisibleBy: {
      categorie: "Comparison",
      type: "Number",
      implantation: "#[Assert\\DivisibleBy( proprietes )]",
      attribute: "public ?int $packSize = null;",
      proprietes: {
        value: 5,
        message: "Cette valeur doit être un multiple de {{ value }}.",
      },
    },
    EqualTo: {
      categorie: "Comparison",
      type: "Number",
      implantation: "#[Assert\\EqualTo( proprietes )]",
      attribute: "public ?int $fixedScore = null;",
      proprietes: {
        value: 100,
        message: "Cette valeur doit être égale à {{ compared_value }}.",
      },
    },
    GreaterThan: {
      categorie: "Comparison",
      type: "Number",
      implantation: "#[Assert\\GreaterThan( proprietes )]",
      attribute: "public ?float $amount = null;",
      proprietes: {
        value: 0,
        message: "Cette valeur doit être supérieure à {{ compared_value }}.",
      },
    },
    GreaterThanOrEqual: {
      categorie: "Comparison",
      type: "Number",
      implantation: "#[Assert\\GreaterThanOrEqual( proprietes )]",
      attribute: "public ?int $age = null;",
      proprietes: {
        value: 18,
        message:
          "Cette valeur doit être supérieure ou égale à {{ compared_value }}.",
      },
    },
    IdenticalTo: {
      categorie: "Comparison",
      type: "Mixed",
      implantation: "#[Assert\\IdenticalTo( proprietes )]",
      attribute: "public mixed $flag;",
      proprietes: {
        value: 1,
        message:
          "Cette valeur doit être strictement identique à {{ compared_value }}.",
      },
    },
    LessThan: {
      categorie: "Comparison",
      type: "Number",
      implantation: "#[Assert\\LessThan( proprietes )]",
      attribute: "public ?int $score = null;",
      proprietes: {
        value: 100,
        message: "Cette valeur doit être inférieure à {{ compared_value }}.",
      },
    },
    LessThanOrEqual: {
      categorie: "Comparison",
      type: "Number",
      implantation: "#[Assert\\LessThanOrEqual( proprietes )]",
      attribute: "public ?float $total = null;",
      proprietes: {
        value: 1000,
        message:
          "Cette valeur doit être inférieure ou égale à {{ compared_value }}.",
      },
    },
    NotEqualTo: {
      categorie: "Comparison",
      type: "Number",
      implantation: "#[Assert\\NotEqualTo( proprietes )]",
      attribute: "public ?int $divider = null;",
      proprietes: {
        value: 0,
        message: "Cette valeur ne doit pas être égale à {{ compared_value }}.",
      },
    },
    NotIdenticalTo: {
      categorie: "Comparison",
      type: "Mixed",
      implantation: "#[Assert\\NotIdenticalTo( proprietes )]",
      attribute: "public ?string $login = null;",
      proprietes: {
        value: "admin",
        message:
          "Cette valeur ne doit pas être strictement identique à {{ compared_value }}.",
      },
    },
    Range: {
      categorie: "Comparison",
      type: "Number",
      implantation: "#[Assert\\Range( proprietes )]",
      attribute: "public ?int $rating = null;",
      proprietes: {
        min: 1,
        max: 5,
        notInRangeMessage:
          "Cette valeur doit être comprise entre {{ min }} et {{ max }}.",
      },
    },
    Unique: {
      categorie: "Comparison",
      type: "Array",
      implantation: "#[Assert\\Unique( proprietes )]",
      attribute: "public array $tags = [];",
      proprietes: {
        message: "Les éléments doivent être tous différents.",
      },
    },

    Negative: {
      categorie: "Number",
      type: "Number",
      implantation: "#[Assert\\Negative( proprietes )]",
      attribute: "public ?int $negativeBalance = null;",
      proprietes: {
        message: "Cette valeur doit être strictement négative.",
      },
    },
    NegativeOrZero: {
      categorie: "Number",
      type: "Number",
      implantation: "#[Assert\\NegativeOrZero( proprietes )]",
      attribute: "public ?float $balance = null;",
      proprietes: {
        message: "Cette valeur doit être négative ou nulle.",
      },
    },
    Positive: {
      categorie: "Number",
      type: "Number",
      implantation: "#[Assert\\Positive( proprietes )]",
      attribute: "public ?int $itemsCount = null;",
      proprietes: {
        message: "Cette valeur doit être strictement positive.",
      },
    },
    PositiveOrZero: {
      categorie: "Number",
      type: "Number",
      implantation: "#[Assert\\PositiveOrZero( proprietes )]",
      attribute: "public ?int $stock = null;",
      proprietes: {
        message: "Cette valeur doit être positive ou nulle.",
      },
    },

    Date: {
      categorie: "Date",
      type: "String",
      implantation: "#[Assert\\Date( proprietes )]",
      attribute: "public ?string $publishDate = null;",
      proprietes: {
        message: "Cette valeur n’est pas une date valide.",
      },
    },
    DateTime: {
      categorie: "Date",
      type: "String",
      implantation: "#[Assert\\DateTime( proprietes )]",
      attribute: "public ?string $scheduledAt = null;",
      proprietes: {
        message: "Cette valeur n’est pas une date/heure valide.",
      },
    },
    Time: {
      categorie: "Date",
      type: "String",
      implantation: "#[Assert\\Time( proprietes )]",
      attribute: "public ?string $openingTime = null;",
      proprietes: {
        message: "Cette valeur n’est pas une heure valide.",
      },
    },
    Timezone: {
      categorie: "Date",
      type: "String",
      implantation: "#[Assert\\Timezone( proprietes )]",
      attribute: "public ?string $timezone = null;",
      proprietes: {
        message: "Ce fuseau horaire n’est pas valide.",
      },
    },
    Week: {
      categorie: "Date",
      type: "String",
      implantation: "#[Assert\\Week( proprietes )]",
      attribute: "public ?string $isoWeek = null;",
      proprietes: {
        message: "Cette valeur doit être une semaine ISO valide (YYYY-Www).",
      },
    },

    Choice: {
      categorie: "Choice",
      type: "Mixed",
      implantation: "#[Assert\\Choice( proprietes )]",
      attribute: "public ?string $status = null;",
      proprietes: {
        choices: ["draft", "published", "archived"],
        message: "Cette valeur n’est pas un choix valide.",
      },
    },
    Country: {
      categorie: "Choice",
      type: "String",
      implantation: "#[Assert\\Country( proprietes )]",
      attribute: "public ?string $countryCode = null;",
      proprietes: {
        message: "Ce code pays n’est pas valide.",
      },
    },
    Language: {
      categorie: "Choice",
      type: "String",
      implantation: "#[Assert\\Language( proprietes )]",
      attribute: "public ?string $languageCode = null;",
      proprietes: {
        message: "Ce code langue n’est pas valide.",
      },
    },
    Locale: {
      categorie: "Choice",
      type: "String",
      implantation: "#[Assert\\Locale( proprietes )]",
      attribute: "public ?string $locale = null;",
      proprietes: {
        message: "Ce locale n’est pas valide.",
      },
    },

    File: {
      categorie: "File",
      type: "File",
      implantation: "#[Assert\\File( proprietes )]",
      attribute:
        "public ?\\Symfony\\Component\\HttpFoundation\\File\\File $contractFile = null;",
      proprietes: {
        maxSize: "5M",
        mimeTypes: ["application/pdf"],
        maxSizeMessage:
          "Le fichier est trop volumineux ({{ size }} {{ suffix }}). Taille maximum : {{ limit }} {{ suffix }}.",
        mimeTypesMessage: "Ce type de fichier n’est pas autorisé.",
      },
    },
    Image: {
      categorie: "File",
      type: "File",
      implantation: "#[Assert\\Image( proprietes )]",
      attribute:
        "public ?\\Symfony\\Component\\HttpFoundation\\File\\File $avatar = null;",
      proprietes: {
        maxSize: "2M",
        mimeTypes: ["image/jpeg", "image/png"],
        mimeTypesMessage: "Seules les images JPEG ou PNG sont autorisées.",
      },
    },
    Video: {
      categorie: "File",
      type: "File",
      implantation: "#[Assert\\Video( proprietes )]",
      attribute:
        "public ?\\Symfony\\Component\\HttpFoundation\\File\\File $videoFile = null;",
      proprietes: {
        maxSize: "100M",
        maxWidth: 1920,
        maxHeight: 1080,
        mimeTypes: ["video/mp4", "video/webm"],
        mimeTypesMessage: "Ce type de fichier vidéo n’est pas autorisé.",
      },
    },

    Bic: {
      categorie: "Financial",
      type: "String",
      implantation: "#[Assert\\Bic( proprietes )]",
      attribute: "public ?string $bic = null;",
      proprietes: {
        message: "Ce code BIC n’est pas valide.",
      },
    },
    CardScheme: {
      categorie: "Financial",
      type: "String",
      implantation: "#[Assert\\CardScheme( proprietes )]",
      attribute: "public ?string $creditCardNumber = null;",
      proprietes: {
        schemes: ["VISA", "MASTERCARD"],
        message:
          "Ce numéro de carte n’est pas valide ou le réseau n’est pas accepté.",
      },
    },
    Currency: {
      categorie: "Financial",
      type: "String",
      implantation: "#[Assert\\Currency( proprietes )]",
      attribute: "public ?string $currency = null;",
      proprietes: {
        message: "Ce code de devise n’est pas valide.",
      },
    },
    Iban: {
      categorie: "Financial",
      type: "String",
      implantation: "#[Assert\\Iban( proprietes )]",
      attribute: "public ?string $iban = null;",
      proprietes: {
        message: "Ce numéro IBAN n’est pas valide.",
      },
    },
    Isbn: {
      categorie: "Financial",
      type: "String",
      implantation: "#[Assert\\Isbn( proprietes )]",
      attribute: "public ?string $isbn = null;",
      proprietes: {
        type: "isbn13",
        message: "Ce code ISBN n’est pas valide.",
      },
    },
    Isin: {
      categorie: "Financial",
      type: "String",
      implantation: "#[Assert\\Isin( proprietes )]",
      attribute: "public ?string $isin = null;",
      proprietes: {
        message: "Ce code ISIN n’est pas valide.",
      },
    },
    Issn: {
      categorie: "Financial",
      type: "String",
      implantation: "#[Assert\\Issn( proprietes )]",
      attribute: "public ?string $issn = null;",
      proprietes: {
        message: "Ce code ISSN n’est pas valide.",
      },
    },
    Luhn: {
      categorie: "Financial",
      type: "String",
      implantation: "#[Assert\\Luhn( proprietes )]",
      attribute: "public ?string $luhnNumber = null;",
      proprietes: {
        message: "Ce numéro n’est pas valide (échec de la vérification Luhn).",
      },
    },

    DisableAutoMapping: {
      categorie: "Doctrine",
      type: "Class",
      implantation:
        "#[\\Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\DisableAutoMapping]",
      attribute: "class LegacyDto {}",
      proprietes: {},
    },
    EnableAutoMapping: {
      categorie: "Doctrine",
      type: "Class",
      implantation:
        "#[\\Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\EnableAutoMapping]",
      attribute: "class Product {}",
      proprietes: {},
    },
    UniqueEntity: {
      categorie: "Doctrine",
      type: "Class",
      implantation:
        "#[\\Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\UniqueEntity( proprietes )]",
      attribute: "class User {}",
      proprietes: {
        fields: ["email"],
        message: "Cet email est déjà utilisé.",
      },
    },

    All: {
      categorie: "Other",
      type: "Array",
      implantation: "#[Assert\\All( proprietes )]",
      attribute: "public array $labels = [];",
      proprietes: {
        constraints: [
          "new Assert\\\\NotBlank()",
          "new Assert\\\\Length(min: 2)",
        ],
      },
    },
    AtLeastOneOf: {
      categorie: "Other",
      type: "Mixed",
      implantation: "#[Assert\\AtLeastOneOf( proprietes )]",
      attribute: "public ?string $contact = null;",
      proprietes: {
        constraints: [
          "new Assert\\\\Email()",
          "new Assert\\\\Regex(pattern: '/^\\\\+?\\\\d+$/')",
        ],
        message:
          "Cette valeur doit être un email valide ou un numéro de téléphone.",
      },
    },
    Callback: {
      categorie: "Other",
      type: "Class",
      implantation: "#[Assert\\Callback]",
      attribute:
        "public function validate(\\Symfony\\Component\\Validator\\Context\\ExecutionContextInterface $context): void {}",
      proprietes: {},
    },
    Cascade: {
      categorie: "Other",
      type: "Object",
      implantation: "#[Assert\\Cascade]",
      attribute: "public ?Address $address = null;",
      proprietes: {},
    },
    Collection: {
      categorie: "Other",
      type: "Array",
      implantation: "#[Assert\\Collection( proprietes )]",
      attribute: "public array $addressData = [];",
      proprietes: {
        fields: {
          street: "new Assert\\\\NotBlank()",
          zipCode: "new Assert\\\\Length(min: 4, max: 10)",
          city: "new Assert\\\\NotBlank()",
        },
        allowExtraFields: false,
      },
    },
    Compound: {
      categorie: "Other",
      type: "Custom",
      implantation: "// Contrainte personnalisée étendant Assert\\\\Compound",
      attribute: "class StrongPassword extends Assert\\\\Compound {}",
      proprietes: {},
    },
    Count: {
      categorie: "Other",
      type: "Array",
      implantation: "#[Assert\\Count( proprietes )]",
      attribute: "public array $items = [];",
      proprietes: {
        min: 1,
        max: 10,
        minMessage: "Vous devez sélectionner au moins {{ limit }} élément.",
        maxMessage:
          "Vous ne pouvez pas sélectionner plus de {{ limit }} éléments.",
      },
    },
    Expression: {
      categorie: "Other",
      type: "Class",
      implantation: "#[Assert\\Expression( proprietes )]",
      attribute: "public bool $validPriceRange = true;",
      proprietes: {
        expression: "this.minPrice <= this.maxPrice",
        message: "Le prix minimum doit être inférieur ou égal au prix maximum.",
      },
    },
    GroupSequence: {
      categorie: "Other",
      type: "Class",
      implantation: "#[Assert\\GroupSequence( proprietes )]",
      attribute: "class Registration {}",
      proprietes: {
        groups: ["Default", "Strict"],
      },
    },
    Sequentially: {
      categorie: "Other",
      type: "Mixed",
      implantation: "#[Assert\\Sequentially( proprietes )]",
      attribute: "public ?string $serialKey = null;",
      proprietes: {
        constraints: [
          "new Assert\\\\NotBlank()",
          "new Assert\\\\Length(min: 5)",
        ],
      },
    },
    Traverse: {
      categorie: "Other",
      type: "Class",
      implantation: "#[Assert\\Traverse]",
      attribute: "public array $config = [];",
      proprietes: {},
    },
    Valid: {
      categorie: "Other",
      type: "Object",
      implantation: "#[Assert\\Valid]",
      attribute: "public ?Profile $profile = null;",
      proprietes: {},
    },
    When: {
      categorie: "Other",
      type: "Mixed",
      implantation: "#[Assert\\When( proprietes )]",
      attribute: "public ?int $discountValue = null;",
      proprietes: {
        expression: "this.type === 'percent'",
        constraints: ["new Assert\\\\Range(min: 1, max: 100)"],
        otherwise: ["new Assert\\\\GreaterThan(0)"],
      },
    },
  },
];
