export const NEWLINE = "\n";
export const INDENT = "  ";

// Types de DTOs supportés
export enum DtoType {
  CREATE = "create",
  UPDATE = "update",
  RESPONSE = "response",
}

// Constantes pour les validations
export const VALIDATION_DECORATORS = {
  IS_STRING: "IsString",
  IS_NUMBER: "IsNumber",
  IS_BOOLEAN: "IsBoolean",
  IS_DATE: "IsDate",
  IS_ARRAY: "IsArray",
  IS_OBJECT: "IsObject",
  IS_OPTIONAL: "IsOptional",
  IS_NOT_EMPTY: "IsNotEmpty",
  IS_EMAIL: "IsEmail",
  IS_UUID: "IsUUID",
  MIN_LENGTH: "MinLength",
  MAX_LENGTH: "MaxLength",
  MIN: "Min",
  MAX: "Max",
  MATCHES: "Matches",
  VALIDATE_NESTED: "ValidateNested",
  TYPE: "Type",

  // Additional common validation decorators
  IS_DEFINED: "IsDefined",
  IS_ENUM: "IsEnum",
  IS_INT: "IsInt",
  IS_POSITIVE: "IsPositive",
  IS_NEGATIVE: "IsNegative",
  IS_DECIMAL: "IsDecimal",
  IS_ALPHA: "IsAlpha",
  IS_ALPHANUMERIC: "IsAlphanumeric",
  IS_ASCII: "IsAscii",
  IS_BASE64: "IsBase64",
  IS_CREDIT_CARD: "IsCreditCard",
  IS_CURRENCY: "IsCurrency",
  IS_DATA_URI: "IsDataURI",
  IS_DATE_STRING: "IsDateString",
  IS_EMPTY: "IsEmpty",
  IS_FQDN: "IsFQDN",
  IS_FULL_WIDTH: "IsFullWidth",
  IS_HALF_WIDTH: "IsHalfWidth",
  IS_HASH: "IsHash",
  IS_HEX_COLOR: "IsHexColor",
  IS_HEXADECIMAL: "IsHexadecimal",
  IS_IP: "IsIP",
  IS_ISBN: "IsISBN",
  IS_ISIN: "IsISIN",
  IS_ISO8601: "IsISO8601",
  IS_JSON: "IsJSON",
  IS_JWT: "IsJWT",
  IS_LATITUDE: "IsLatitude",
  IS_LONGITUDE: "IsLongitude",
  IS_LOWERCASE: "IsLowercase",
  IS_MAC_ADDRESS: "IsMacAddress",
  IS_MIME_TYPE: "IsMimeType",
  IS_MOBILE_PHONE: "IsMobilePhone",
  IS_MONGO_ID: "IsMongoId",
  IS_NUMERIC: "IsNumeric",
  IS_OCTAL: "IsOctal",
  IS_PASSPORT_NUMBER: "IsPassportNumber",
  IS_PHONE_NUMBER: "IsPhoneNumber",
  IS_PORT: "IsPort",
  IS_POSTAL_CODE: "IsPostalCode",
  IS_RGB_COLOR: "IsRgbColor",
  IS_SURROGATE_PAIR: "IsSurrogatePair",
  IS_URL: "IsUrl",
  IS_UPPERCASE: "IsUppercase",
  IS_VARIABLE_WIDTH: "IsVariableWidth",
  CONTAINS: "Contains",
  NOT_CONTAINS: "NotContains",
  EQUALS: "Equals",
  NOT_EQUALS: "NotEquals",
  ARRAY_CONTAINS: "ArrayContains",
  ARRAY_NOT_CONTAINS: "ArrayNotContains",
  ARRAY_NOT_EMPTY: "ArrayNotEmpty",
  ARRAY_MIN_SIZE: "ArrayMinSize",
  ARRAY_MAX_SIZE: "ArrayMaxSize",
  ARRAY_UNIQUE: "ArrayUnique",
  IS_INSTANCE: "IsInstance",
  ALLOW: "Allow",
  VALIDATE: "Validate",
  VALIDATE_IF: "ValidateIf",
  VALIDATE_PROMISE: "ValidatePromise",
  IS_MILITARY_TIME: "IsMilitaryTime",
  IS_TIME_ZONE: "IsTimeZone",
  IS_LOCALE: "IsLocale",
  IS_BIC: "IsBIC",
  IS_IBAN: "IsIBAN",
  IS_ETHEREUM_ADDRESS: "IsEthereumAddress",
  IS_BTC_ADDRESS: "IsBtcAddress",
  IS_MAGNET_URI: "IsMagnetURI",
  IS_FIREBASE_PUSH_ID: "IsFirebasePushId",
  IS_SLUG: "IsSlug",
  IS_STRONG_PASSWORD: "IsStrongPassword",
  IS_TAX_ID: "IsTaxId",
  IS_SEMVER: "IsSemVer",
  LENGTH: "Length",
  MIN_DATE: "MinDate",
  MAX_DATE: "MaxDate",
  IS_DIVISIBLE_BY: "IsDivisibleBy",
  IS_IN: "IsIn",
  IS_NOT_IN: "IsNotIn",
} as const;

export const TRANSFORM_DECORATORS = {
  TRANSFORM: "Transform",
  EXCLUDE: "Exclude",
  EXPOSE: "Expose",
  TYPE: "Type",

  // Additional class-transformer decorators
  PLAIN_TO_CLASS: "PlainToClass",
  CLASS_TO_PLAIN: "ClassToPlain",
  SERIALIZE: "Serialize",
  DESERIALIZE: "Deserialize",
  TRANSFORM_CLASS_TO_PLAIN: "TransformClassToPlain",
  TRANSFORM_PLAIN_TO_CLASS: "TransformPlainToClass",
  TRANSFORM_CLASS_TO_CLASS: "TransformClassToClass",

  // Exclusion and exposure strategies
  EXCLUDE_EXTRANEOUS_VALUES: "ExcludeExtraneousValues",
  EXPOSE_ALL: "ExposeAll",

  // Type transformation decorators
  TO_CLASS_ONLY: "ToClassOnly",
  TO_PLAIN_ONLY: "ToPlainOnly",

  // Custom transformation decorators
  CUSTOM_TRANSFORMER: "CustomTransformer",

  // Nested transformation
  NESTED: "Nested",

  // Array transformation
  ARRAY_TYPE: "ArrayType",

  // Date transformation
  DATE_TYPE: "DateType",

  // Conditional transformation
  TRANSFORM_IF: "TransformIf",

  // Property naming strategies
  SERIALIZE_AS: "SerializeAs",
  DESERIALIZE_AS: "DeserializeAs",

  // Value transformation
  TO_NUMBER: "ToNumber",
  TO_STRING: "ToString",
  TO_BOOLEAN: "ToBoolean",
  TO_DATE: "ToDate",
  TO_ARRAY: "ToArray",
  TO_OBJECT: "ToObject",

  // Trimming and formatting
  TRIM: "Trim",
  TO_LOWER_CASE: "ToLowerCase",
  TO_UPPER_CASE: "ToUpperCase",

  // JSON transformation
  JSON_PARSE: "JsonParse",
  JSON_STRINGIFY: "JsonStringify",

  // Property aliasing
  ALIAS: "Alias",

  // Grouping
  GROUPS: "Groups",

  // Version control
  SINCE: "Since",
  UNTIL: "Until",

  // Discriminator for polymorphic types
  DISCRIMINATOR: "Discriminator",
  SUBTYPE: "Subtype",

  // Metadata
  METADATA: "Metadata",

  // Custom naming strategy
  NAMING_STRATEGY: "NamingStrategy",

  // Interceptors
  BEFORE_TRANSFORM: "BeforeTransform",
  AFTER_TRANSFORM: "AfterTransform",

  // Validation groups integration
  VALIDATE_GROUPS: "ValidateGroups",

  // Async transformation
  ASYNC_TRANSFORM: "AsyncTransform",

  // Error handling
  TRANSFORM_ERROR: "TransformError",
  IGNORE_ERRORS: "IgnoreErrors",

  // Circular reference handling
  CIRCULAR_REFERENCE: "CircularReference",
  MAX_DEPTH: "MaxDepth",

  // Performance optimization
  LAZY_TRANSFORM: "LazyTransform",
  CACHE_TRANSFORM: "CacheTransform",
} as const;

// Constantes pour une meilleure maintenabilité
export const TYPEORM_COLUMN_TYPES = {
  VARCHAR: "'varchar'",
  TEXT: "'text'",
  LONGTEXT: "'text'",
  INT: "'int'",
  INTEGER: "'integer'",
  SMALLINT: "'smallint'",
  BIGINT: "'bigint'",
  DECIMAL: "'decimal'",
  FLOAT: "'float'",
  DOUBLE: "'double'",
  BOOLEAN: "'boolean'",
  DATETIME: "'timestamp'",
  TIMESTAMP: "'timestamp'",
  ARRAY_STRING: "'simple-array'",
  JSON: "'simple-json'",

  // Additional string types
  CHAR: "'char'",
  NCHAR: "'nchar'",
  NVARCHAR: "'nvarchar'",
  NTEXT: "'ntext'",
  TINYTEXT: "'tinytext'",
  MEDIUMTEXT: "'mediumtext'",
  LONGTEXT_EXPLICIT: "'longtext'",

  // Additional numeric types
  TINYINT: "'tinyint'",
  MEDIUMINT: "'mediumint'",
  REAL: "'real'",
  DOUBLE_PRECISION: "'double precision'",
  NUMERIC: "'numeric'",
  BIT: "'bit'",
  MONEY: "'money'",
  SMALLMONEY: "'smallmoney'",

  // Date and time types
  DATE: "'date'",
  TIME: "'time'",
  DATETIME2: "'datetime2'",
  SMALLDATETIME: "'smalldatetime'",
  DATETIMEOFFSET: "'datetimeoffset'",
  TIMESTAMP_WITH_TIMEZONE: "'timestamp with time zone'",
  TIMESTAMP_WITHOUT_TIMEZONE: "'timestamp without time zone'",
  TIME_WITH_TIMEZONE: "'time with time zone'",
  TIME_WITHOUT_TIMEZONE: "'time without time zone'",
  INTERVAL: "'interval'",
  YEAR: "'year'",

  // Binary types
  BINARY: "'binary'",
  VARBINARY: "'varbinary'",
  BLOB: "'blob'",
  TINYBLOB: "'tinyblob'",
  MEDIUMBLOB: "'mediumblob'",
  LONGBLOB: "'longblob'",
  IMAGE: "'image'",
  BYTEA: "'bytea'",

  // JSON types
  JSON_EXPLICIT: "'json'",
  JSONB: "'jsonb'",
  SIMPLE_JSON: "'simple-json'",

  // Array types
  SIMPLE_ARRAY: "'simple-array'",
  ARRAY: "'array'",

  // Enum types
  ENUM: "'enum'",
  SET: "'set'",

  // UUID types
  UUID: "'uuid'",

  // Geometry types
  GEOMETRY: "'geometry'",
  POINT: "'point'",
  LINESTRING: "'linestring'",
  POLYGON: "'polygon'",
  MULTIPOINT: "'multipoint'",
  MULTILINESTRING: "'multilinestring'",
  MULTIPOLYGON: "'multipolygon'",
  GEOMETRYCOLLECTION: "'geometrycollection'",

  // PostgreSQL specific types
  SERIAL: "'serial'",
  BIGSERIAL: "'bigserial'",
  SMALLSERIAL: "'smallserial'",
  INET: "'inet'",
  CIDR: "'cidr'",
  MACADDR: "'macaddr'",
  TSVECTOR: "'tsvector'",
  TSQUERY: "'tsquery'",
  XML: "'xml'",
  HSTORE: "'hstore'",

  // MySQL specific types
  YEAR_MYSQL: "'year'",
  LINESTRING_MYSQL: "'linestring'",
  POLYGON_MYSQL: "'polygon'",
  MULTIPOINT_MYSQL: "'multipoint'",
  MULTILINESTRING_MYSQL: "'multilinestring'",
  MULTIPOLYGON_MYSQL: "'multipolygon'",
  GEOMETRYCOLLECTION_MYSQL: "'geometrycollection'",

  // SQLite specific types
  BLOB_SQLITE: "'blob'",

  // Oracle specific types
  CLOB: "'clob'",
  NCLOB: "'nclob'",
  BFILE: "'bfile'",
  ROWID: "'rowid'",
  UROWID: "'urowid'",
  NUMBER: "'number'",
  LONG: "'long'",
  LONG_RAW: "'long raw'",
  RAW: "'raw'",

  // SQL Server specific types
  UNIQUEIDENTIFIER: "'uniqueidentifier'",
  ROWVERSION: "'rowversion'",
  HIERARCHYID: "'hierarchyid'",
  SQL_VARIANT: "'sql_variant'",
  TABLE: "'table'",
  CURSOR: "'cursor'",

  // Generic types
  SIMPLE_ENUM: "'simple-enum'",
  OBJECT: "'object'",

  // Virtual column type
  VIRTUAL: "'virtual'",

  // Custom types
  CUSTOM: "'custom'",
} as const;

export const SPECIAL_COLUMN_NAMES = {
  CREATED_AT: "created_at",
  UPDATED_AT: "updated_at",
} as const;

export const TYPEORM_DECORATORS = {
  ENTITY: "Entity",
  PRIMARY_GENERATED_COLUMN: "PrimaryGeneratedColumn",
  COLUMN: "Column",
  CREATE_DATE_COLUMN: "CreateDateColumn",
  UPDATE_DATE_COLUMN: "UpdateDateColumn",
  JOIN_COLUMN: "JoinColumn",
  ONE_TO_ONE: "OneToOne",
  ONE_TO_MANY: "OneToMany",
  MANY_TO_ONE: "ManyToOne",
  MANY_TO_MANY: "ManyToMany",

  // Additional entity decorators
  TABLE_INHERITANCE: "TableInheritance",
  CHILD_ENTITY: "ChildEntity",
  DISCRIMINATOR_COLUMN: "DiscriminatorColumn",
  DISCRIMINATOR_VALUE: "DiscriminatorValue",

  // Column decorators
  PRIMARY_COLUMN: "PrimaryColumn",
  OBJECT_ID_COLUMN: "ObjectIdColumn",
  VERSION_COLUMN: "VersionColumn",
  DELETE_DATE_COLUMN: "DeleteDateColumn",
  GENERATED: "Generated",
  VIEW_COLUMN: "ViewColumn",

  // Index decorators
  INDEX: "Index",
  UNIQUE: "Unique",

  // Join decorators
  JOIN_TABLE: "JoinTable",
  RELATION_ID: "RelationId",
  RELATION_COUNT: "RelationCount",

  // Tree decorators
  TREE: "Tree",
  TREE_PARENT: "TreeParent",
  TREE_CHILDREN: "TreeChildren",
  TREE_LEVEL_COLUMN: "TreeLevelColumn",

  // Event decorators
  BEFORE_INSERT: "BeforeInsert",
  BEFORE_UPDATE: "BeforeUpdate",
  BEFORE_REMOVE: "BeforeRemove",
  AFTER_INSERT: "AfterInsert",
  AFTER_UPDATE: "AfterUpdate",
  AFTER_REMOVE: "AfterRemove",
  AFTER_LOAD: "AfterLoad",

  // Transaction decorators
  TRANSACTION: "Transaction",
  TRANSACTION_MANAGER: "TransactionManager",
  TRANSACTION_REPOSITORY: "TransactionRepository",

  // Entity listener decorators
  ENTITY_REPOSITORY: "EntityRepository",
  ENTITY_MANAGER: "EntityManager",

  // Custom repository decorators
  CUSTOM_REPOSITORY: "CustomRepository",

  // View entity decorators
  VIEW_ENTITY: "ViewEntity",

  // Check constraint decorators
  CHECK: "Check",

  // Exclusion constraint decorators
  EXCLUSION: "Exclusion",

  // MongoDB specific decorators
  OBJECT_ID: "ObjectId",

  // Subscriber decorators
  EVENT_SUBSCRIBER: "EventSubscriber",

  // Migration decorators
  MIGRATION: "Migration",

  // Connection decorators
  CONNECTION: "Connection",

  // Database decorators
  DATABASE: "Database",

  // Schema decorators
  SCHEMA: "Schema",

  // Naming strategy decorators
  NAMING_STRATEGY: "NamingStrategy",

  // Cache decorators
  CACHE: "Cache",

  // Spatial decorators
  SPATIAL: "Spatial",

  // Full-text search decorators
  FULLTEXT: "Fulltext",

  // Synchronization decorators
  SYNCHRONIZE: "Synchronize",

  // Logging decorators
  LOGGING: "Logging",

  // Connection options decorators
  CONNECTION_OPTIONS: "ConnectionOptions",

  // Entity options decorators
  ENTITY_OPTIONS: "EntityOptions",

  // Column options decorators
  COLUMN_OPTIONS: "ColumnOptions",

  // Relation options decorators
  RELATION_OPTIONS: "RelationOptions",

  // Query decorators
  QUERY: "Query",
  QUERY_BUILDER: "QueryBuilder",

  // Repository decorators
  REPOSITORY: "Repository",
  TREE_REPOSITORY: "TreeRepository",
  MONGO_REPOSITORY: "MongoRepository",

  // Connection manager decorators
  CONNECTION_MANAGER: "ConnectionManager",

  // Metadata decorators
  METADATA: "Metadata",

  // Driver decorators
  DRIVER: "Driver",

  // Platform decorators
  PLATFORM: "Platform",

  // Type decorators
  TYPE: "Type",

  // Transform decorators
  TRANSFORM: "Transform",

  // Validation decorators integration
  VALIDATE: "Validate",

  // Soft delete decorators
  SOFT_DELETE: "SoftDelete",

  // Audit decorators
  AUDIT: "Audit",

  // Temporal decorators
  TEMPORAL: "Temporal",

  // Polymorphic decorators
  POLYMORPHIC: "Polymorphic",

  // Cascade decorators
  CASCADE: "Cascade",

  // Lazy decorators
  LAZY: "Lazy",

  // Eager decorators
  EAGER: "Eager",
} as const;
