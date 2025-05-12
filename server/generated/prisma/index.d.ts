
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model clubs
 * 
 */
export type clubs = $Result.DefaultSelection<Prisma.$clubsPayload>
/**
 * Model users_clubs
 * 
 */
export type users_clubs = $Result.DefaultSelection<Prisma.$users_clubsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.posts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.posts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clubs`: Exposes CRUD operations for the **clubs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.clubs.findMany()
    * ```
    */
  get clubs(): Prisma.clubsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users_clubs`: Exposes CRUD operations for the **users_clubs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_clubs
    * const users_clubs = await prisma.users_clubs.findMany()
    * ```
    */
  get users_clubs(): Prisma.users_clubsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    posts: 'posts',
    users: 'users',
    clubs: 'clubs',
    users_clubs: 'users_clubs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "posts" | "users" | "clubs" | "users_clubs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      clubs: {
        payload: Prisma.$clubsPayload<ExtArgs>
        fields: Prisma.clubsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clubsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clubsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          findFirst: {
            args: Prisma.clubsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clubsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          findMany: {
            args: Prisma.clubsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>[]
          }
          create: {
            args: Prisma.clubsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          createMany: {
            args: Prisma.clubsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clubsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>[]
          }
          delete: {
            args: Prisma.clubsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          update: {
            args: Prisma.clubsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          deleteMany: {
            args: Prisma.clubsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clubsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clubsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>[]
          }
          upsert: {
            args: Prisma.clubsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clubsPayload>
          }
          aggregate: {
            args: Prisma.ClubsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClubs>
          }
          groupBy: {
            args: Prisma.clubsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubsGroupByOutputType>[]
          }
          count: {
            args: Prisma.clubsCountArgs<ExtArgs>
            result: $Utils.Optional<ClubsCountAggregateOutputType> | number
          }
        }
      }
      users_clubs: {
        payload: Prisma.$users_clubsPayload<ExtArgs>
        fields: Prisma.users_clubsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.users_clubsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_clubsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.users_clubsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_clubsPayload>
          }
          findFirst: {
            args: Prisma.users_clubsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_clubsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.users_clubsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_clubsPayload>
          }
          findMany: {
            args: Prisma.users_clubsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_clubsPayload>[]
          }
          create: {
            args: Prisma.users_clubsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_clubsPayload>
          }
          createMany: {
            args: Prisma.users_clubsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.users_clubsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_clubsPayload>[]
          }
          delete: {
            args: Prisma.users_clubsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_clubsPayload>
          }
          update: {
            args: Prisma.users_clubsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_clubsPayload>
          }
          deleteMany: {
            args: Prisma.users_clubsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.users_clubsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.users_clubsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_clubsPayload>[]
          }
          upsert: {
            args: Prisma.users_clubsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_clubsPayload>
          }
          aggregate: {
            args: Prisma.Users_clubsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_clubs>
          }
          groupBy: {
            args: Prisma.users_clubsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_clubsGroupByOutputType>[]
          }
          count: {
            args: Prisma.users_clubsCountArgs<ExtArgs>
            result: $Utils.Optional<Users_clubsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    posts?: postsOmit
    users?: usersOmit
    clubs?: clubsOmit
    users_clubs?: users_clubsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    posts: number
    users_clubs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
    users_clubs?: boolean | UsersCountOutputTypeCountUsers_clubsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUsers_clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_clubsWhereInput
  }


  /**
   * Count Type ClubsCountOutputType
   */

  export type ClubsCountOutputType = {
    posts: number
    users_clubs: number
  }

  export type ClubsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | ClubsCountOutputTypeCountPostsArgs
    users_clubs?: boolean | ClubsCountOutputTypeCountUsers_clubsArgs
  }

  // Custom InputTypes
  /**
   * ClubsCountOutputType without action
   */
  export type ClubsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubsCountOutputType
     */
    select?: ClubsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClubsCountOutputType without action
   */
  export type ClubsCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }

  /**
   * ClubsCountOutputType without action
   */
  export type ClubsCountOutputTypeCountUsers_clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_clubsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
    club_id: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
    author_id: number | null
    club_id: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    author_id: number | null
    club_id: number | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    author_id: number | null
    club_id: number | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    created_at: number
    author_id: number
    club_id: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
    author_id?: true
    club_id?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
    author_id?: true
    club_id?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    author_id?: true
    club_id?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    author_id?: true
    club_id?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    author_id?: true
    club_id?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    title: string
    content: string
    created_at: Date | null
    author_id: number
    club_id: number | null
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    author_id?: boolean
    club_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    clubs?: boolean | posts$clubsArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    author_id?: boolean
    club_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    clubs?: boolean | posts$clubsArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    author_id?: boolean
    club_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    clubs?: boolean | posts$clubsArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    author_id?: boolean
    club_id?: boolean
  }

  export type postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "created_at" | "author_id" | "club_id", ExtArgs["result"]["posts"]>
  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    clubs?: boolean | posts$clubsArgs<ExtArgs>
  }
  export type postsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    clubs?: boolean | posts$clubsArgs<ExtArgs>
  }
  export type postsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    clubs?: boolean | posts$clubsArgs<ExtArgs>
  }

  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      clubs: Prisma.$clubsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      created_at: Date | null
      author_id: number
      club_id: number | null
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postsFindUniqueArgs>(args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postsFindFirstArgs>(args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends postsFindManyArgs>(args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends postsCreateArgs>(args: SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postsCreateManyArgs>(args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {postsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postsCreateManyAndReturnArgs>(args?: SelectSubset<T, postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends postsDeleteArgs>(args: SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postsUpdateArgs>(args: SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postsDeleteManyArgs>(args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postsUpdateManyArgs>(args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {postsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends postsUpdateManyAndReturnArgs>(args: SelectSubset<T, postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends postsUpsertArgs>(args: SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clubs<T extends posts$clubsArgs<ExtArgs> = {}>(args?: Subset<T, posts$clubsArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the posts model
   */
  interface postsFieldRefs {
    readonly id: FieldRef<"posts", 'Int'>
    readonly title: FieldRef<"posts", 'String'>
    readonly content: FieldRef<"posts", 'String'>
    readonly created_at: FieldRef<"posts", 'DateTime'>
    readonly author_id: FieldRef<"posts", 'Int'>
    readonly club_id: FieldRef<"posts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }

  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts createManyAndReturn
   */
  export type postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * posts updateManyAndReturn
   */
  export type postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }

  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * posts.clubs
   */
  export type posts$clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    where?: clubsWhereInput
  }

  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string | null
    password: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    posts?: boolean | users$postsArgs<ExtArgs>
    users_clubs?: boolean | users$users_clubsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | users$postsArgs<ExtArgs>
    users_clubs?: boolean | users$users_clubsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      posts: Prisma.$postsPayload<ExtArgs>[]
      users_clubs: Prisma.$users_clubsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      password: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends users$postsArgs<ExtArgs> = {}>(args?: Subset<T, users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_clubs<T extends users$users_clubsArgs<ExtArgs> = {}>(args?: Subset<T, users$users_clubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.posts
   */
  export type users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * users.users_clubs
   */
  export type users$users_clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
    where?: users_clubsWhereInput
    orderBy?: users_clubsOrderByWithRelationInput | users_clubsOrderByWithRelationInput[]
    cursor?: users_clubsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_clubsScalarFieldEnum | Users_clubsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model clubs
   */

  export type AggregateClubs = {
    _count: ClubsCountAggregateOutputType | null
    _avg: ClubsAvgAggregateOutputType | null
    _sum: ClubsSumAggregateOutputType | null
    _min: ClubsMinAggregateOutputType | null
    _max: ClubsMaxAggregateOutputType | null
  }

  export type ClubsAvgAggregateOutputType = {
    id: number | null
  }

  export type ClubsSumAggregateOutputType = {
    id: number | null
  }

  export type ClubsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ClubsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ClubsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ClubsAvgAggregateInputType = {
    id?: true
  }

  export type ClubsSumAggregateInputType = {
    id?: true
  }

  export type ClubsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClubsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClubsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ClubsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clubs to aggregate.
     */
    where?: clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubs to fetch.
     */
    orderBy?: clubsOrderByWithRelationInput | clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clubs
    **/
    _count?: true | ClubsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClubsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClubsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubsMaxAggregateInputType
  }

  export type GetClubsAggregateType<T extends ClubsAggregateArgs> = {
        [P in keyof T & keyof AggregateClubs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClubs[P]>
      : GetScalarType<T[P], AggregateClubs[P]>
  }




  export type clubsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clubsWhereInput
    orderBy?: clubsOrderByWithAggregationInput | clubsOrderByWithAggregationInput[]
    by: ClubsScalarFieldEnum[] | ClubsScalarFieldEnum
    having?: clubsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubsCountAggregateInputType | true
    _avg?: ClubsAvgAggregateInputType
    _sum?: ClubsSumAggregateInputType
    _min?: ClubsMinAggregateInputType
    _max?: ClubsMaxAggregateInputType
  }

  export type ClubsGroupByOutputType = {
    id: number
    name: string
    _count: ClubsCountAggregateOutputType | null
    _avg: ClubsAvgAggregateOutputType | null
    _sum: ClubsSumAggregateOutputType | null
    _min: ClubsMinAggregateOutputType | null
    _max: ClubsMaxAggregateOutputType | null
  }

  type GetClubsGroupByPayload<T extends clubsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubsGroupByOutputType[P]>
            : GetScalarType<T[P], ClubsGroupByOutputType[P]>
        }
      >
    >


  export type clubsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    posts?: boolean | clubs$postsArgs<ExtArgs>
    users_clubs?: boolean | clubs$users_clubsArgs<ExtArgs>
    _count?: boolean | ClubsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clubs"]>

  export type clubsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["clubs"]>

  export type clubsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["clubs"]>

  export type clubsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type clubsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["clubs"]>
  export type clubsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | clubs$postsArgs<ExtArgs>
    users_clubs?: boolean | clubs$users_clubsArgs<ExtArgs>
    _count?: boolean | ClubsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clubsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clubsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clubsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clubs"
    objects: {
      posts: Prisma.$postsPayload<ExtArgs>[]
      users_clubs: Prisma.$users_clubsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["clubs"]>
    composites: {}
  }

  type clubsGetPayload<S extends boolean | null | undefined | clubsDefaultArgs> = $Result.GetResult<Prisma.$clubsPayload, S>

  type clubsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clubsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubsCountAggregateInputType | true
    }

  export interface clubsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clubs'], meta: { name: 'clubs' } }
    /**
     * Find zero or one Clubs that matches the filter.
     * @param {clubsFindUniqueArgs} args - Arguments to find a Clubs
     * @example
     * // Get one Clubs
     * const clubs = await prisma.clubs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clubsFindUniqueArgs>(args: SelectSubset<T, clubsFindUniqueArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clubs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clubsFindUniqueOrThrowArgs} args - Arguments to find a Clubs
     * @example
     * // Get one Clubs
     * const clubs = await prisma.clubs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clubsFindUniqueOrThrowArgs>(args: SelectSubset<T, clubsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsFindFirstArgs} args - Arguments to find a Clubs
     * @example
     * // Get one Clubs
     * const clubs = await prisma.clubs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clubsFindFirstArgs>(args?: SelectSubset<T, clubsFindFirstArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clubs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsFindFirstOrThrowArgs} args - Arguments to find a Clubs
     * @example
     * // Get one Clubs
     * const clubs = await prisma.clubs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clubsFindFirstOrThrowArgs>(args?: SelectSubset<T, clubsFindFirstOrThrowArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.clubs.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.clubs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubsWithIdOnly = await prisma.clubs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clubsFindManyArgs>(args?: SelectSubset<T, clubsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clubs.
     * @param {clubsCreateArgs} args - Arguments to create a Clubs.
     * @example
     * // Create one Clubs
     * const Clubs = await prisma.clubs.create({
     *   data: {
     *     // ... data to create a Clubs
     *   }
     * })
     * 
     */
    create<T extends clubsCreateArgs>(args: SelectSubset<T, clubsCreateArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {clubsCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const clubs = await prisma.clubs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clubsCreateManyArgs>(args?: SelectSubset<T, clubsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clubs and returns the data saved in the database.
     * @param {clubsCreateManyAndReturnArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const clubs = await prisma.clubs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clubs and only return the `id`
     * const clubsWithIdOnly = await prisma.clubs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clubsCreateManyAndReturnArgs>(args?: SelectSubset<T, clubsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clubs.
     * @param {clubsDeleteArgs} args - Arguments to delete one Clubs.
     * @example
     * // Delete one Clubs
     * const Clubs = await prisma.clubs.delete({
     *   where: {
     *     // ... filter to delete one Clubs
     *   }
     * })
     * 
     */
    delete<T extends clubsDeleteArgs>(args: SelectSubset<T, clubsDeleteArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clubs.
     * @param {clubsUpdateArgs} args - Arguments to update one Clubs.
     * @example
     * // Update one Clubs
     * const clubs = await prisma.clubs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clubsUpdateArgs>(args: SelectSubset<T, clubsUpdateArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {clubsDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.clubs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clubsDeleteManyArgs>(args?: SelectSubset<T, clubsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const clubs = await prisma.clubs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clubsUpdateManyArgs>(args: SelectSubset<T, clubsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs and returns the data updated in the database.
     * @param {clubsUpdateManyAndReturnArgs} args - Arguments to update many Clubs.
     * @example
     * // Update many Clubs
     * const clubs = await prisma.clubs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clubs and only return the `id`
     * const clubsWithIdOnly = await prisma.clubs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clubsUpdateManyAndReturnArgs>(args: SelectSubset<T, clubsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clubs.
     * @param {clubsUpsertArgs} args - Arguments to update or create a Clubs.
     * @example
     * // Update or create a Clubs
     * const clubs = await prisma.clubs.upsert({
     *   create: {
     *     // ... data to create a Clubs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clubs we want to update
     *   }
     * })
     */
    upsert<T extends clubsUpsertArgs>(args: SelectSubset<T, clubsUpsertArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.clubs.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends clubsCountArgs>(
      args?: Subset<T, clubsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClubsAggregateArgs>(args: Subset<T, ClubsAggregateArgs>): Prisma.PrismaPromise<GetClubsAggregateType<T>>

    /**
     * Group by Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clubsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clubsGroupByArgs['orderBy'] }
        : { orderBy?: clubsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clubsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clubs model
   */
  readonly fields: clubsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clubs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clubsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends clubs$postsArgs<ExtArgs> = {}>(args?: Subset<T, clubs$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_clubs<T extends clubs$users_clubsArgs<ExtArgs> = {}>(args?: Subset<T, clubs$users_clubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clubs model
   */
  interface clubsFieldRefs {
    readonly id: FieldRef<"clubs", 'Int'>
    readonly name: FieldRef<"clubs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * clubs findUnique
   */
  export type clubsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter, which clubs to fetch.
     */
    where: clubsWhereUniqueInput
  }

  /**
   * clubs findUniqueOrThrow
   */
  export type clubsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter, which clubs to fetch.
     */
    where: clubsWhereUniqueInput
  }

  /**
   * clubs findFirst
   */
  export type clubsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter, which clubs to fetch.
     */
    where?: clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubs to fetch.
     */
    orderBy?: clubsOrderByWithRelationInput | clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clubs.
     */
    cursor?: clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clubs.
     */
    distinct?: ClubsScalarFieldEnum | ClubsScalarFieldEnum[]
  }

  /**
   * clubs findFirstOrThrow
   */
  export type clubsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter, which clubs to fetch.
     */
    where?: clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubs to fetch.
     */
    orderBy?: clubsOrderByWithRelationInput | clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clubs.
     */
    cursor?: clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clubs.
     */
    distinct?: ClubsScalarFieldEnum | ClubsScalarFieldEnum[]
  }

  /**
   * clubs findMany
   */
  export type clubsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter, which clubs to fetch.
     */
    where?: clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubs to fetch.
     */
    orderBy?: clubsOrderByWithRelationInput | clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clubs.
     */
    cursor?: clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubs.
     */
    skip?: number
    distinct?: ClubsScalarFieldEnum | ClubsScalarFieldEnum[]
  }

  /**
   * clubs create
   */
  export type clubsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * The data needed to create a clubs.
     */
    data: XOR<clubsCreateInput, clubsUncheckedCreateInput>
  }

  /**
   * clubs createMany
   */
  export type clubsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clubs.
     */
    data: clubsCreateManyInput | clubsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clubs createManyAndReturn
   */
  export type clubsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * The data used to create many clubs.
     */
    data: clubsCreateManyInput | clubsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clubs update
   */
  export type clubsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * The data needed to update a clubs.
     */
    data: XOR<clubsUpdateInput, clubsUncheckedUpdateInput>
    /**
     * Choose, which clubs to update.
     */
    where: clubsWhereUniqueInput
  }

  /**
   * clubs updateMany
   */
  export type clubsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clubs.
     */
    data: XOR<clubsUpdateManyMutationInput, clubsUncheckedUpdateManyInput>
    /**
     * Filter which clubs to update
     */
    where?: clubsWhereInput
    /**
     * Limit how many clubs to update.
     */
    limit?: number
  }

  /**
   * clubs updateManyAndReturn
   */
  export type clubsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * The data used to update clubs.
     */
    data: XOR<clubsUpdateManyMutationInput, clubsUncheckedUpdateManyInput>
    /**
     * Filter which clubs to update
     */
    where?: clubsWhereInput
    /**
     * Limit how many clubs to update.
     */
    limit?: number
  }

  /**
   * clubs upsert
   */
  export type clubsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * The filter to search for the clubs to update in case it exists.
     */
    where: clubsWhereUniqueInput
    /**
     * In case the clubs found by the `where` argument doesn't exist, create a new clubs with this data.
     */
    create: XOR<clubsCreateInput, clubsUncheckedCreateInput>
    /**
     * In case the clubs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clubsUpdateInput, clubsUncheckedUpdateInput>
  }

  /**
   * clubs delete
   */
  export type clubsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
    /**
     * Filter which clubs to delete.
     */
    where: clubsWhereUniqueInput
  }

  /**
   * clubs deleteMany
   */
  export type clubsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clubs to delete
     */
    where?: clubsWhereInput
    /**
     * Limit how many clubs to delete.
     */
    limit?: number
  }

  /**
   * clubs.posts
   */
  export type clubs$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * clubs.users_clubs
   */
  export type clubs$users_clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
    where?: users_clubsWhereInput
    orderBy?: users_clubsOrderByWithRelationInput | users_clubsOrderByWithRelationInput[]
    cursor?: users_clubsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_clubsScalarFieldEnum | Users_clubsScalarFieldEnum[]
  }

  /**
   * clubs without action
   */
  export type clubsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubs
     */
    select?: clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clubs
     */
    omit?: clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clubsInclude<ExtArgs> | null
  }


  /**
   * Model users_clubs
   */

  export type AggregateUsers_clubs = {
    _count: Users_clubsCountAggregateOutputType | null
    _avg: Users_clubsAvgAggregateOutputType | null
    _sum: Users_clubsSumAggregateOutputType | null
    _min: Users_clubsMinAggregateOutputType | null
    _max: Users_clubsMaxAggregateOutputType | null
  }

  export type Users_clubsAvgAggregateOutputType = {
    user_id: number | null
    club_id: number | null
  }

  export type Users_clubsSumAggregateOutputType = {
    user_id: number | null
    club_id: number | null
  }

  export type Users_clubsMinAggregateOutputType = {
    user_id: number | null
    club_id: number | null
  }

  export type Users_clubsMaxAggregateOutputType = {
    user_id: number | null
    club_id: number | null
  }

  export type Users_clubsCountAggregateOutputType = {
    user_id: number
    club_id: number
    _all: number
  }


  export type Users_clubsAvgAggregateInputType = {
    user_id?: true
    club_id?: true
  }

  export type Users_clubsSumAggregateInputType = {
    user_id?: true
    club_id?: true
  }

  export type Users_clubsMinAggregateInputType = {
    user_id?: true
    club_id?: true
  }

  export type Users_clubsMaxAggregateInputType = {
    user_id?: true
    club_id?: true
  }

  export type Users_clubsCountAggregateInputType = {
    user_id?: true
    club_id?: true
    _all?: true
  }

  export type Users_clubsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_clubs to aggregate.
     */
    where?: users_clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_clubs to fetch.
     */
    orderBy?: users_clubsOrderByWithRelationInput | users_clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: users_clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users_clubs
    **/
    _count?: true | Users_clubsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Users_clubsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Users_clubsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_clubsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_clubsMaxAggregateInputType
  }

  export type GetUsers_clubsAggregateType<T extends Users_clubsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_clubs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_clubs[P]>
      : GetScalarType<T[P], AggregateUsers_clubs[P]>
  }




  export type users_clubsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_clubsWhereInput
    orderBy?: users_clubsOrderByWithAggregationInput | users_clubsOrderByWithAggregationInput[]
    by: Users_clubsScalarFieldEnum[] | Users_clubsScalarFieldEnum
    having?: users_clubsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_clubsCountAggregateInputType | true
    _avg?: Users_clubsAvgAggregateInputType
    _sum?: Users_clubsSumAggregateInputType
    _min?: Users_clubsMinAggregateInputType
    _max?: Users_clubsMaxAggregateInputType
  }

  export type Users_clubsGroupByOutputType = {
    user_id: number
    club_id: number
    _count: Users_clubsCountAggregateOutputType | null
    _avg: Users_clubsAvgAggregateOutputType | null
    _sum: Users_clubsSumAggregateOutputType | null
    _min: Users_clubsMinAggregateOutputType | null
    _max: Users_clubsMaxAggregateOutputType | null
  }

  type GetUsers_clubsGroupByPayload<T extends users_clubsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_clubsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_clubsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_clubsGroupByOutputType[P]>
            : GetScalarType<T[P], Users_clubsGroupByOutputType[P]>
        }
      >
    >


  export type users_clubsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    club_id?: boolean
    clubs?: boolean | clubsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_clubs"]>

  export type users_clubsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    club_id?: boolean
    clubs?: boolean | clubsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_clubs"]>

  export type users_clubsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    club_id?: boolean
    clubs?: boolean | clubsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_clubs"]>

  export type users_clubsSelectScalar = {
    user_id?: boolean
    club_id?: boolean
  }

  export type users_clubsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "club_id", ExtArgs["result"]["users_clubs"]>
  export type users_clubsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clubs?: boolean | clubsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type users_clubsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clubs?: boolean | clubsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type users_clubsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clubs?: boolean | clubsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $users_clubsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users_clubs"
    objects: {
      clubs: Prisma.$clubsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      club_id: number
    }, ExtArgs["result"]["users_clubs"]>
    composites: {}
  }

  type users_clubsGetPayload<S extends boolean | null | undefined | users_clubsDefaultArgs> = $Result.GetResult<Prisma.$users_clubsPayload, S>

  type users_clubsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<users_clubsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_clubsCountAggregateInputType | true
    }

  export interface users_clubsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users_clubs'], meta: { name: 'users_clubs' } }
    /**
     * Find zero or one Users_clubs that matches the filter.
     * @param {users_clubsFindUniqueArgs} args - Arguments to find a Users_clubs
     * @example
     * // Get one Users_clubs
     * const users_clubs = await prisma.users_clubs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends users_clubsFindUniqueArgs>(args: SelectSubset<T, users_clubsFindUniqueArgs<ExtArgs>>): Prisma__users_clubsClient<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_clubs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {users_clubsFindUniqueOrThrowArgs} args - Arguments to find a Users_clubs
     * @example
     * // Get one Users_clubs
     * const users_clubs = await prisma.users_clubs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends users_clubsFindUniqueOrThrowArgs>(args: SelectSubset<T, users_clubsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__users_clubsClient<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_clubsFindFirstArgs} args - Arguments to find a Users_clubs
     * @example
     * // Get one Users_clubs
     * const users_clubs = await prisma.users_clubs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends users_clubsFindFirstArgs>(args?: SelectSubset<T, users_clubsFindFirstArgs<ExtArgs>>): Prisma__users_clubsClient<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_clubs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_clubsFindFirstOrThrowArgs} args - Arguments to find a Users_clubs
     * @example
     * // Get one Users_clubs
     * const users_clubs = await prisma.users_clubs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends users_clubsFindFirstOrThrowArgs>(args?: SelectSubset<T, users_clubsFindFirstOrThrowArgs<ExtArgs>>): Prisma__users_clubsClient<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_clubsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_clubs
     * const users_clubs = await prisma.users_clubs.findMany()
     * 
     * // Get first 10 Users_clubs
     * const users_clubs = await prisma.users_clubs.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const users_clubsWithUser_idOnly = await prisma.users_clubs.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends users_clubsFindManyArgs>(args?: SelectSubset<T, users_clubsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_clubs.
     * @param {users_clubsCreateArgs} args - Arguments to create a Users_clubs.
     * @example
     * // Create one Users_clubs
     * const Users_clubs = await prisma.users_clubs.create({
     *   data: {
     *     // ... data to create a Users_clubs
     *   }
     * })
     * 
     */
    create<T extends users_clubsCreateArgs>(args: SelectSubset<T, users_clubsCreateArgs<ExtArgs>>): Prisma__users_clubsClient<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_clubs.
     * @param {users_clubsCreateManyArgs} args - Arguments to create many Users_clubs.
     * @example
     * // Create many Users_clubs
     * const users_clubs = await prisma.users_clubs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends users_clubsCreateManyArgs>(args?: SelectSubset<T, users_clubsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users_clubs and returns the data saved in the database.
     * @param {users_clubsCreateManyAndReturnArgs} args - Arguments to create many Users_clubs.
     * @example
     * // Create many Users_clubs
     * const users_clubs = await prisma.users_clubs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users_clubs and only return the `user_id`
     * const users_clubsWithUser_idOnly = await prisma.users_clubs.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends users_clubsCreateManyAndReturnArgs>(args?: SelectSubset<T, users_clubsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users_clubs.
     * @param {users_clubsDeleteArgs} args - Arguments to delete one Users_clubs.
     * @example
     * // Delete one Users_clubs
     * const Users_clubs = await prisma.users_clubs.delete({
     *   where: {
     *     // ... filter to delete one Users_clubs
     *   }
     * })
     * 
     */
    delete<T extends users_clubsDeleteArgs>(args: SelectSubset<T, users_clubsDeleteArgs<ExtArgs>>): Prisma__users_clubsClient<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_clubs.
     * @param {users_clubsUpdateArgs} args - Arguments to update one Users_clubs.
     * @example
     * // Update one Users_clubs
     * const users_clubs = await prisma.users_clubs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends users_clubsUpdateArgs>(args: SelectSubset<T, users_clubsUpdateArgs<ExtArgs>>): Prisma__users_clubsClient<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_clubs.
     * @param {users_clubsDeleteManyArgs} args - Arguments to filter Users_clubs to delete.
     * @example
     * // Delete a few Users_clubs
     * const { count } = await prisma.users_clubs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends users_clubsDeleteManyArgs>(args?: SelectSubset<T, users_clubsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_clubsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_clubs
     * const users_clubs = await prisma.users_clubs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends users_clubsUpdateManyArgs>(args: SelectSubset<T, users_clubsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_clubs and returns the data updated in the database.
     * @param {users_clubsUpdateManyAndReturnArgs} args - Arguments to update many Users_clubs.
     * @example
     * // Update many Users_clubs
     * const users_clubs = await prisma.users_clubs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users_clubs and only return the `user_id`
     * const users_clubsWithUser_idOnly = await prisma.users_clubs.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends users_clubsUpdateManyAndReturnArgs>(args: SelectSubset<T, users_clubsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users_clubs.
     * @param {users_clubsUpsertArgs} args - Arguments to update or create a Users_clubs.
     * @example
     * // Update or create a Users_clubs
     * const users_clubs = await prisma.users_clubs.upsert({
     *   create: {
     *     // ... data to create a Users_clubs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_clubs we want to update
     *   }
     * })
     */
    upsert<T extends users_clubsUpsertArgs>(args: SelectSubset<T, users_clubsUpsertArgs<ExtArgs>>): Prisma__users_clubsClient<$Result.GetResult<Prisma.$users_clubsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_clubsCountArgs} args - Arguments to filter Users_clubs to count.
     * @example
     * // Count the number of Users_clubs
     * const count = await prisma.users_clubs.count({
     *   where: {
     *     // ... the filter for the Users_clubs we want to count
     *   }
     * })
    **/
    count<T extends users_clubsCountArgs>(
      args?: Subset<T, users_clubsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_clubsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_clubsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Users_clubsAggregateArgs>(args: Subset<T, Users_clubsAggregateArgs>): Prisma.PrismaPromise<GetUsers_clubsAggregateType<T>>

    /**
     * Group by Users_clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_clubsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends users_clubsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: users_clubsGroupByArgs['orderBy'] }
        : { orderBy?: users_clubsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, users_clubsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_clubsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users_clubs model
   */
  readonly fields: users_clubsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users_clubs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__users_clubsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clubs<T extends clubsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clubsDefaultArgs<ExtArgs>>): Prisma__clubsClient<$Result.GetResult<Prisma.$clubsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users_clubs model
   */
  interface users_clubsFieldRefs {
    readonly user_id: FieldRef<"users_clubs", 'Int'>
    readonly club_id: FieldRef<"users_clubs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users_clubs findUnique
   */
  export type users_clubsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
    /**
     * Filter, which users_clubs to fetch.
     */
    where: users_clubsWhereUniqueInput
  }

  /**
   * users_clubs findUniqueOrThrow
   */
  export type users_clubsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
    /**
     * Filter, which users_clubs to fetch.
     */
    where: users_clubsWhereUniqueInput
  }

  /**
   * users_clubs findFirst
   */
  export type users_clubsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
    /**
     * Filter, which users_clubs to fetch.
     */
    where?: users_clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_clubs to fetch.
     */
    orderBy?: users_clubsOrderByWithRelationInput | users_clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_clubs.
     */
    cursor?: users_clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_clubs.
     */
    distinct?: Users_clubsScalarFieldEnum | Users_clubsScalarFieldEnum[]
  }

  /**
   * users_clubs findFirstOrThrow
   */
  export type users_clubsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
    /**
     * Filter, which users_clubs to fetch.
     */
    where?: users_clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_clubs to fetch.
     */
    orderBy?: users_clubsOrderByWithRelationInput | users_clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_clubs.
     */
    cursor?: users_clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_clubs.
     */
    distinct?: Users_clubsScalarFieldEnum | Users_clubsScalarFieldEnum[]
  }

  /**
   * users_clubs findMany
   */
  export type users_clubsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
    /**
     * Filter, which users_clubs to fetch.
     */
    where?: users_clubsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_clubs to fetch.
     */
    orderBy?: users_clubsOrderByWithRelationInput | users_clubsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users_clubs.
     */
    cursor?: users_clubsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_clubs.
     */
    skip?: number
    distinct?: Users_clubsScalarFieldEnum | Users_clubsScalarFieldEnum[]
  }

  /**
   * users_clubs create
   */
  export type users_clubsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
    /**
     * The data needed to create a users_clubs.
     */
    data: XOR<users_clubsCreateInput, users_clubsUncheckedCreateInput>
  }

  /**
   * users_clubs createMany
   */
  export type users_clubsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users_clubs.
     */
    data: users_clubsCreateManyInput | users_clubsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users_clubs createManyAndReturn
   */
  export type users_clubsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * The data used to create many users_clubs.
     */
    data: users_clubsCreateManyInput | users_clubsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users_clubs update
   */
  export type users_clubsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
    /**
     * The data needed to update a users_clubs.
     */
    data: XOR<users_clubsUpdateInput, users_clubsUncheckedUpdateInput>
    /**
     * Choose, which users_clubs to update.
     */
    where: users_clubsWhereUniqueInput
  }

  /**
   * users_clubs updateMany
   */
  export type users_clubsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users_clubs.
     */
    data: XOR<users_clubsUpdateManyMutationInput, users_clubsUncheckedUpdateManyInput>
    /**
     * Filter which users_clubs to update
     */
    where?: users_clubsWhereInput
    /**
     * Limit how many users_clubs to update.
     */
    limit?: number
  }

  /**
   * users_clubs updateManyAndReturn
   */
  export type users_clubsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * The data used to update users_clubs.
     */
    data: XOR<users_clubsUpdateManyMutationInput, users_clubsUncheckedUpdateManyInput>
    /**
     * Filter which users_clubs to update
     */
    where?: users_clubsWhereInput
    /**
     * Limit how many users_clubs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users_clubs upsert
   */
  export type users_clubsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
    /**
     * The filter to search for the users_clubs to update in case it exists.
     */
    where: users_clubsWhereUniqueInput
    /**
     * In case the users_clubs found by the `where` argument doesn't exist, create a new users_clubs with this data.
     */
    create: XOR<users_clubsCreateInput, users_clubsUncheckedCreateInput>
    /**
     * In case the users_clubs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<users_clubsUpdateInput, users_clubsUncheckedUpdateInput>
  }

  /**
   * users_clubs delete
   */
  export type users_clubsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
    /**
     * Filter which users_clubs to delete.
     */
    where: users_clubsWhereUniqueInput
  }

  /**
   * users_clubs deleteMany
   */
  export type users_clubsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_clubs to delete
     */
    where?: users_clubsWhereInput
    /**
     * Limit how many users_clubs to delete.
     */
    limit?: number
  }

  /**
   * users_clubs without action
   */
  export type users_clubsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_clubs
     */
    select?: users_clubsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_clubs
     */
    omit?: users_clubsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_clubsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    created_at: 'created_at',
    author_id: 'author_id',
    club_id: 'club_id'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ClubsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ClubsScalarFieldEnum = (typeof ClubsScalarFieldEnum)[keyof typeof ClubsScalarFieldEnum]


  export const Users_clubsScalarFieldEnum: {
    user_id: 'user_id',
    club_id: 'club_id'
  };

  export type Users_clubsScalarFieldEnum = (typeof Users_clubsScalarFieldEnum)[keyof typeof Users_clubsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    id?: IntFilter<"posts"> | number
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    author_id?: IntFilter<"posts"> | number
    club_id?: IntNullableFilter<"posts"> | number | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    clubs?: XOR<ClubsNullableScalarRelationFilter, clubsWhereInput> | null
  }

  export type postsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    author_id?: SortOrder
    club_id?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    clubs?: clubsOrderByWithRelationInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    author_id?: IntFilter<"posts"> | number
    club_id?: IntNullableFilter<"posts"> | number | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    clubs?: XOR<ClubsNullableScalarRelationFilter, clubsWhereInput> | null
  }, "id">

  export type postsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    author_id?: SortOrder
    club_id?: SortOrderInput | SortOrder
    _count?: postsCountOrderByAggregateInput
    _avg?: postsAvgOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
    _sum?: postsSumOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"posts"> | number
    title?: StringWithAggregatesFilter<"posts"> | string
    content?: StringWithAggregatesFilter<"posts"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
    author_id?: IntWithAggregatesFilter<"posts"> | number
    club_id?: IntNullableWithAggregatesFilter<"posts"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    posts?: PostsListRelationFilter
    users_clubs?: Users_clubsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    posts?: postsOrderByRelationAggregateInput
    users_clubs?: users_clubsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringNullableFilter<"users"> | string | null
    posts?: PostsListRelationFilter
    users_clubs?: Users_clubsListRelationFilter
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type clubsWhereInput = {
    AND?: clubsWhereInput | clubsWhereInput[]
    OR?: clubsWhereInput[]
    NOT?: clubsWhereInput | clubsWhereInput[]
    id?: IntFilter<"clubs"> | number
    name?: StringFilter<"clubs"> | string
    posts?: PostsListRelationFilter
    users_clubs?: Users_clubsListRelationFilter
  }

  export type clubsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    posts?: postsOrderByRelationAggregateInput
    users_clubs?: users_clubsOrderByRelationAggregateInput
  }

  export type clubsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: clubsWhereInput | clubsWhereInput[]
    OR?: clubsWhereInput[]
    NOT?: clubsWhereInput | clubsWhereInput[]
    posts?: PostsListRelationFilter
    users_clubs?: Users_clubsListRelationFilter
  }, "id" | "name">

  export type clubsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: clubsCountOrderByAggregateInput
    _avg?: clubsAvgOrderByAggregateInput
    _max?: clubsMaxOrderByAggregateInput
    _min?: clubsMinOrderByAggregateInput
    _sum?: clubsSumOrderByAggregateInput
  }

  export type clubsScalarWhereWithAggregatesInput = {
    AND?: clubsScalarWhereWithAggregatesInput | clubsScalarWhereWithAggregatesInput[]
    OR?: clubsScalarWhereWithAggregatesInput[]
    NOT?: clubsScalarWhereWithAggregatesInput | clubsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clubs"> | number
    name?: StringWithAggregatesFilter<"clubs"> | string
  }

  export type users_clubsWhereInput = {
    AND?: users_clubsWhereInput | users_clubsWhereInput[]
    OR?: users_clubsWhereInput[]
    NOT?: users_clubsWhereInput | users_clubsWhereInput[]
    user_id?: IntFilter<"users_clubs"> | number
    club_id?: IntFilter<"users_clubs"> | number
    clubs?: XOR<ClubsScalarRelationFilter, clubsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type users_clubsOrderByWithRelationInput = {
    user_id?: SortOrder
    club_id?: SortOrder
    clubs?: clubsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type users_clubsWhereUniqueInput = Prisma.AtLeast<{
    user_id_club_id?: users_clubsUser_idClub_idCompoundUniqueInput
    AND?: users_clubsWhereInput | users_clubsWhereInput[]
    OR?: users_clubsWhereInput[]
    NOT?: users_clubsWhereInput | users_clubsWhereInput[]
    user_id?: IntFilter<"users_clubs"> | number
    club_id?: IntFilter<"users_clubs"> | number
    clubs?: XOR<ClubsScalarRelationFilter, clubsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id_club_id">

  export type users_clubsOrderByWithAggregationInput = {
    user_id?: SortOrder
    club_id?: SortOrder
    _count?: users_clubsCountOrderByAggregateInput
    _avg?: users_clubsAvgOrderByAggregateInput
    _max?: users_clubsMaxOrderByAggregateInput
    _min?: users_clubsMinOrderByAggregateInput
    _sum?: users_clubsSumOrderByAggregateInput
  }

  export type users_clubsScalarWhereWithAggregatesInput = {
    AND?: users_clubsScalarWhereWithAggregatesInput | users_clubsScalarWhereWithAggregatesInput[]
    OR?: users_clubsScalarWhereWithAggregatesInput[]
    NOT?: users_clubsScalarWhereWithAggregatesInput | users_clubsScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users_clubs"> | number
    club_id?: IntWithAggregatesFilter<"users_clubs"> | number
  }

  export type postsCreateInput = {
    title: string
    content: string
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutPostsInput
    clubs?: clubsCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string | null
    author_id: number
    club_id?: number | null
  }

  export type postsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
    clubs?: clubsUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    club_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type postsCreateManyInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string | null
    author_id: number
    club_id?: number | null
  }

  export type postsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
    club_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    username?: string | null
    password?: string | null
    posts?: postsCreateNestedManyWithoutUsersInput
    users_clubs?: users_clubsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username?: string | null
    password?: string | null
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    users_clubs?: users_clubsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: postsUpdateManyWithoutUsersNestedInput
    users_clubs?: users_clubsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    users_clubs?: users_clubsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username?: string | null
    password?: string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clubsCreateInput = {
    name: string
    posts?: postsCreateNestedManyWithoutClubsInput
    users_clubs?: users_clubsCreateNestedManyWithoutClubsInput
  }

  export type clubsUncheckedCreateInput = {
    id?: number
    name: string
    posts?: postsUncheckedCreateNestedManyWithoutClubsInput
    users_clubs?: users_clubsUncheckedCreateNestedManyWithoutClubsInput
  }

  export type clubsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    posts?: postsUpdateManyWithoutClubsNestedInput
    users_clubs?: users_clubsUpdateManyWithoutClubsNestedInput
  }

  export type clubsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    posts?: postsUncheckedUpdateManyWithoutClubsNestedInput
    users_clubs?: users_clubsUncheckedUpdateManyWithoutClubsNestedInput
  }

  export type clubsCreateManyInput = {
    id?: number
    name: string
  }

  export type clubsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type clubsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type users_clubsCreateInput = {
    clubs: clubsCreateNestedOneWithoutUsers_clubsInput
    users: usersCreateNestedOneWithoutUsers_clubsInput
  }

  export type users_clubsUncheckedCreateInput = {
    user_id: number
    club_id: number
  }

  export type users_clubsUpdateInput = {
    clubs?: clubsUpdateOneRequiredWithoutUsers_clubsNestedInput
    users?: usersUpdateOneRequiredWithoutUsers_clubsNestedInput
  }

  export type users_clubsUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    club_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_clubsCreateManyInput = {
    user_id: number
    club_id: number
  }

  export type users_clubsUpdateManyMutationInput = {

  }

  export type users_clubsUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    club_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type ClubsNullableScalarRelationFilter = {
    is?: clubsWhereInput | null
    isNot?: clubsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type postsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    author_id?: SortOrder
    club_id?: SortOrder
  }

  export type postsAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    club_id?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    author_id?: SortOrder
    club_id?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    author_id?: SortOrder
    club_id?: SortOrder
  }

  export type postsSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    club_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type Users_clubsListRelationFilter = {
    every?: users_clubsWhereInput
    some?: users_clubsWhereInput
    none?: users_clubsWhereInput
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type users_clubsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type clubsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type clubsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clubsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type clubsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type clubsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClubsScalarRelationFilter = {
    is?: clubsWhereInput
    isNot?: clubsWhereInput
  }

  export type users_clubsUser_idClub_idCompoundUniqueInput = {
    user_id: number
    club_id: number
  }

  export type users_clubsCountOrderByAggregateInput = {
    user_id?: SortOrder
    club_id?: SortOrder
  }

  export type users_clubsAvgOrderByAggregateInput = {
    user_id?: SortOrder
    club_id?: SortOrder
  }

  export type users_clubsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    club_id?: SortOrder
  }

  export type users_clubsMinOrderByAggregateInput = {
    user_id?: SortOrder
    club_id?: SortOrder
  }

  export type users_clubsSumOrderByAggregateInput = {
    user_id?: SortOrder
    club_id?: SortOrder
  }

  export type usersCreateNestedOneWithoutPostsInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    connect?: usersWhereUniqueInput
  }

  export type clubsCreateNestedOneWithoutPostsInput = {
    create?: XOR<clubsCreateWithoutPostsInput, clubsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: clubsCreateOrConnectWithoutPostsInput
    connect?: clubsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    upsert?: usersUpsertWithoutPostsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPostsInput, usersUpdateWithoutPostsInput>, usersUncheckedUpdateWithoutPostsInput>
  }

  export type clubsUpdateOneWithoutPostsNestedInput = {
    create?: XOR<clubsCreateWithoutPostsInput, clubsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: clubsCreateOrConnectWithoutPostsInput
    upsert?: clubsUpsertWithoutPostsInput
    disconnect?: clubsWhereInput | boolean
    delete?: clubsWhereInput | boolean
    connect?: clubsWhereUniqueInput
    update?: XOR<XOR<clubsUpdateToOneWithWhereWithoutPostsInput, clubsUpdateWithoutPostsInput>, clubsUncheckedUpdateWithoutPostsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type postsCreateNestedManyWithoutUsersInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type users_clubsCreateNestedManyWithoutUsersInput = {
    create?: XOR<users_clubsCreateWithoutUsersInput, users_clubsUncheckedCreateWithoutUsersInput> | users_clubsCreateWithoutUsersInput[] | users_clubsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_clubsCreateOrConnectWithoutUsersInput | users_clubsCreateOrConnectWithoutUsersInput[]
    createMany?: users_clubsCreateManyUsersInputEnvelope
    connect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type users_clubsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<users_clubsCreateWithoutUsersInput, users_clubsUncheckedCreateWithoutUsersInput> | users_clubsCreateWithoutUsersInput[] | users_clubsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_clubsCreateOrConnectWithoutUsersInput | users_clubsCreateOrConnectWithoutUsersInput[]
    createMany?: users_clubsCreateManyUsersInputEnvelope
    connect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type postsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsersInput | postsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsersInput | postsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsersInput | postsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type users_clubsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<users_clubsCreateWithoutUsersInput, users_clubsUncheckedCreateWithoutUsersInput> | users_clubsCreateWithoutUsersInput[] | users_clubsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_clubsCreateOrConnectWithoutUsersInput | users_clubsCreateOrConnectWithoutUsersInput[]
    upsert?: users_clubsUpsertWithWhereUniqueWithoutUsersInput | users_clubsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: users_clubsCreateManyUsersInputEnvelope
    set?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    disconnect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    delete?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    connect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    update?: users_clubsUpdateWithWhereUniqueWithoutUsersInput | users_clubsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: users_clubsUpdateManyWithWhereWithoutUsersInput | users_clubsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: users_clubsScalarWhereInput | users_clubsScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsersInput | postsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsersInput | postsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsersInput | postsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type users_clubsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<users_clubsCreateWithoutUsersInput, users_clubsUncheckedCreateWithoutUsersInput> | users_clubsCreateWithoutUsersInput[] | users_clubsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_clubsCreateOrConnectWithoutUsersInput | users_clubsCreateOrConnectWithoutUsersInput[]
    upsert?: users_clubsUpsertWithWhereUniqueWithoutUsersInput | users_clubsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: users_clubsCreateManyUsersInputEnvelope
    set?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    disconnect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    delete?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    connect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    update?: users_clubsUpdateWithWhereUniqueWithoutUsersInput | users_clubsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: users_clubsUpdateManyWithWhereWithoutUsersInput | users_clubsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: users_clubsScalarWhereInput | users_clubsScalarWhereInput[]
  }

  export type postsCreateNestedManyWithoutClubsInput = {
    create?: XOR<postsCreateWithoutClubsInput, postsUncheckedCreateWithoutClubsInput> | postsCreateWithoutClubsInput[] | postsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutClubsInput | postsCreateOrConnectWithoutClubsInput[]
    createMany?: postsCreateManyClubsInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type users_clubsCreateNestedManyWithoutClubsInput = {
    create?: XOR<users_clubsCreateWithoutClubsInput, users_clubsUncheckedCreateWithoutClubsInput> | users_clubsCreateWithoutClubsInput[] | users_clubsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: users_clubsCreateOrConnectWithoutClubsInput | users_clubsCreateOrConnectWithoutClubsInput[]
    createMany?: users_clubsCreateManyClubsInputEnvelope
    connect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutClubsInput = {
    create?: XOR<postsCreateWithoutClubsInput, postsUncheckedCreateWithoutClubsInput> | postsCreateWithoutClubsInput[] | postsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutClubsInput | postsCreateOrConnectWithoutClubsInput[]
    createMany?: postsCreateManyClubsInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type users_clubsUncheckedCreateNestedManyWithoutClubsInput = {
    create?: XOR<users_clubsCreateWithoutClubsInput, users_clubsUncheckedCreateWithoutClubsInput> | users_clubsCreateWithoutClubsInput[] | users_clubsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: users_clubsCreateOrConnectWithoutClubsInput | users_clubsCreateOrConnectWithoutClubsInput[]
    createMany?: users_clubsCreateManyClubsInputEnvelope
    connect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
  }

  export type postsUpdateManyWithoutClubsNestedInput = {
    create?: XOR<postsCreateWithoutClubsInput, postsUncheckedCreateWithoutClubsInput> | postsCreateWithoutClubsInput[] | postsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutClubsInput | postsCreateOrConnectWithoutClubsInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutClubsInput | postsUpsertWithWhereUniqueWithoutClubsInput[]
    createMany?: postsCreateManyClubsInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutClubsInput | postsUpdateWithWhereUniqueWithoutClubsInput[]
    updateMany?: postsUpdateManyWithWhereWithoutClubsInput | postsUpdateManyWithWhereWithoutClubsInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type users_clubsUpdateManyWithoutClubsNestedInput = {
    create?: XOR<users_clubsCreateWithoutClubsInput, users_clubsUncheckedCreateWithoutClubsInput> | users_clubsCreateWithoutClubsInput[] | users_clubsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: users_clubsCreateOrConnectWithoutClubsInput | users_clubsCreateOrConnectWithoutClubsInput[]
    upsert?: users_clubsUpsertWithWhereUniqueWithoutClubsInput | users_clubsUpsertWithWhereUniqueWithoutClubsInput[]
    createMany?: users_clubsCreateManyClubsInputEnvelope
    set?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    disconnect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    delete?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    connect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    update?: users_clubsUpdateWithWhereUniqueWithoutClubsInput | users_clubsUpdateWithWhereUniqueWithoutClubsInput[]
    updateMany?: users_clubsUpdateManyWithWhereWithoutClubsInput | users_clubsUpdateManyWithWhereWithoutClubsInput[]
    deleteMany?: users_clubsScalarWhereInput | users_clubsScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutClubsNestedInput = {
    create?: XOR<postsCreateWithoutClubsInput, postsUncheckedCreateWithoutClubsInput> | postsCreateWithoutClubsInput[] | postsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutClubsInput | postsCreateOrConnectWithoutClubsInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutClubsInput | postsUpsertWithWhereUniqueWithoutClubsInput[]
    createMany?: postsCreateManyClubsInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutClubsInput | postsUpdateWithWhereUniqueWithoutClubsInput[]
    updateMany?: postsUpdateManyWithWhereWithoutClubsInput | postsUpdateManyWithWhereWithoutClubsInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type users_clubsUncheckedUpdateManyWithoutClubsNestedInput = {
    create?: XOR<users_clubsCreateWithoutClubsInput, users_clubsUncheckedCreateWithoutClubsInput> | users_clubsCreateWithoutClubsInput[] | users_clubsUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: users_clubsCreateOrConnectWithoutClubsInput | users_clubsCreateOrConnectWithoutClubsInput[]
    upsert?: users_clubsUpsertWithWhereUniqueWithoutClubsInput | users_clubsUpsertWithWhereUniqueWithoutClubsInput[]
    createMany?: users_clubsCreateManyClubsInputEnvelope
    set?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    disconnect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    delete?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    connect?: users_clubsWhereUniqueInput | users_clubsWhereUniqueInput[]
    update?: users_clubsUpdateWithWhereUniqueWithoutClubsInput | users_clubsUpdateWithWhereUniqueWithoutClubsInput[]
    updateMany?: users_clubsUpdateManyWithWhereWithoutClubsInput | users_clubsUpdateManyWithWhereWithoutClubsInput[]
    deleteMany?: users_clubsScalarWhereInput | users_clubsScalarWhereInput[]
  }

  export type clubsCreateNestedOneWithoutUsers_clubsInput = {
    create?: XOR<clubsCreateWithoutUsers_clubsInput, clubsUncheckedCreateWithoutUsers_clubsInput>
    connectOrCreate?: clubsCreateOrConnectWithoutUsers_clubsInput
    connect?: clubsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUsers_clubsInput = {
    create?: XOR<usersCreateWithoutUsers_clubsInput, usersUncheckedCreateWithoutUsers_clubsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_clubsInput
    connect?: usersWhereUniqueInput
  }

  export type clubsUpdateOneRequiredWithoutUsers_clubsNestedInput = {
    create?: XOR<clubsCreateWithoutUsers_clubsInput, clubsUncheckedCreateWithoutUsers_clubsInput>
    connectOrCreate?: clubsCreateOrConnectWithoutUsers_clubsInput
    upsert?: clubsUpsertWithoutUsers_clubsInput
    connect?: clubsWhereUniqueInput
    update?: XOR<XOR<clubsUpdateToOneWithWhereWithoutUsers_clubsInput, clubsUpdateWithoutUsers_clubsInput>, clubsUncheckedUpdateWithoutUsers_clubsInput>
  }

  export type usersUpdateOneRequiredWithoutUsers_clubsNestedInput = {
    create?: XOR<usersCreateWithoutUsers_clubsInput, usersUncheckedCreateWithoutUsers_clubsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_clubsInput
    upsert?: usersUpsertWithoutUsers_clubsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUsers_clubsInput, usersUpdateWithoutUsers_clubsInput>, usersUncheckedUpdateWithoutUsers_clubsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutPostsInput = {
    username?: string | null
    password?: string | null
    users_clubs?: users_clubsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPostsInput = {
    id?: number
    username?: string | null
    password?: string | null
    users_clubs?: users_clubsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPostsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
  }

  export type clubsCreateWithoutPostsInput = {
    name: string
    users_clubs?: users_clubsCreateNestedManyWithoutClubsInput
  }

  export type clubsUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    users_clubs?: users_clubsUncheckedCreateNestedManyWithoutClubsInput
  }

  export type clubsCreateOrConnectWithoutPostsInput = {
    where: clubsWhereUniqueInput
    create: XOR<clubsCreateWithoutPostsInput, clubsUncheckedCreateWithoutPostsInput>
  }

  export type usersUpsertWithoutPostsInput = {
    update: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPostsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
  }

  export type usersUpdateWithoutPostsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    users_clubs?: users_clubsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    users_clubs?: users_clubsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type clubsUpsertWithoutPostsInput = {
    update: XOR<clubsUpdateWithoutPostsInput, clubsUncheckedUpdateWithoutPostsInput>
    create: XOR<clubsCreateWithoutPostsInput, clubsUncheckedCreateWithoutPostsInput>
    where?: clubsWhereInput
  }

  export type clubsUpdateToOneWithWhereWithoutPostsInput = {
    where?: clubsWhereInput
    data: XOR<clubsUpdateWithoutPostsInput, clubsUncheckedUpdateWithoutPostsInput>
  }

  export type clubsUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    users_clubs?: users_clubsUpdateManyWithoutClubsNestedInput
  }

  export type clubsUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users_clubs?: users_clubsUncheckedUpdateManyWithoutClubsNestedInput
  }

  export type postsCreateWithoutUsersInput = {
    title: string
    content: string
    created_at?: Date | string | null
    clubs?: clubsCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string | null
    club_id?: number | null
  }

  export type postsCreateOrConnectWithoutUsersInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsCreateManyUsersInputEnvelope = {
    data: postsCreateManyUsersInput | postsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type users_clubsCreateWithoutUsersInput = {
    clubs: clubsCreateNestedOneWithoutUsers_clubsInput
  }

  export type users_clubsUncheckedCreateWithoutUsersInput = {
    club_id: number
  }

  export type users_clubsCreateOrConnectWithoutUsersInput = {
    where: users_clubsWhereUniqueInput
    create: XOR<users_clubsCreateWithoutUsersInput, users_clubsUncheckedCreateWithoutUsersInput>
  }

  export type users_clubsCreateManyUsersInputEnvelope = {
    data: users_clubsCreateManyUsersInput | users_clubsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type postsUpsertWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsUpdateWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
  }

  export type postsUpdateManyWithWhereWithoutUsersInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutUsersInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    id?: IntFilter<"posts"> | number
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    author_id?: IntFilter<"posts"> | number
    club_id?: IntNullableFilter<"posts"> | number | null
  }

  export type users_clubsUpsertWithWhereUniqueWithoutUsersInput = {
    where: users_clubsWhereUniqueInput
    update: XOR<users_clubsUpdateWithoutUsersInput, users_clubsUncheckedUpdateWithoutUsersInput>
    create: XOR<users_clubsCreateWithoutUsersInput, users_clubsUncheckedCreateWithoutUsersInput>
  }

  export type users_clubsUpdateWithWhereUniqueWithoutUsersInput = {
    where: users_clubsWhereUniqueInput
    data: XOR<users_clubsUpdateWithoutUsersInput, users_clubsUncheckedUpdateWithoutUsersInput>
  }

  export type users_clubsUpdateManyWithWhereWithoutUsersInput = {
    where: users_clubsScalarWhereInput
    data: XOR<users_clubsUpdateManyMutationInput, users_clubsUncheckedUpdateManyWithoutUsersInput>
  }

  export type users_clubsScalarWhereInput = {
    AND?: users_clubsScalarWhereInput | users_clubsScalarWhereInput[]
    OR?: users_clubsScalarWhereInput[]
    NOT?: users_clubsScalarWhereInput | users_clubsScalarWhereInput[]
    user_id?: IntFilter<"users_clubs"> | number
    club_id?: IntFilter<"users_clubs"> | number
  }

  export type postsCreateWithoutClubsInput = {
    title: string
    content: string
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutClubsInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string | null
    author_id: number
  }

  export type postsCreateOrConnectWithoutClubsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutClubsInput, postsUncheckedCreateWithoutClubsInput>
  }

  export type postsCreateManyClubsInputEnvelope = {
    data: postsCreateManyClubsInput | postsCreateManyClubsInput[]
    skipDuplicates?: boolean
  }

  export type users_clubsCreateWithoutClubsInput = {
    users: usersCreateNestedOneWithoutUsers_clubsInput
  }

  export type users_clubsUncheckedCreateWithoutClubsInput = {
    user_id: number
  }

  export type users_clubsCreateOrConnectWithoutClubsInput = {
    where: users_clubsWhereUniqueInput
    create: XOR<users_clubsCreateWithoutClubsInput, users_clubsUncheckedCreateWithoutClubsInput>
  }

  export type users_clubsCreateManyClubsInputEnvelope = {
    data: users_clubsCreateManyClubsInput | users_clubsCreateManyClubsInput[]
    skipDuplicates?: boolean
  }

  export type postsUpsertWithWhereUniqueWithoutClubsInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutClubsInput, postsUncheckedUpdateWithoutClubsInput>
    create: XOR<postsCreateWithoutClubsInput, postsUncheckedCreateWithoutClubsInput>
  }

  export type postsUpdateWithWhereUniqueWithoutClubsInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutClubsInput, postsUncheckedUpdateWithoutClubsInput>
  }

  export type postsUpdateManyWithWhereWithoutClubsInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutClubsInput>
  }

  export type users_clubsUpsertWithWhereUniqueWithoutClubsInput = {
    where: users_clubsWhereUniqueInput
    update: XOR<users_clubsUpdateWithoutClubsInput, users_clubsUncheckedUpdateWithoutClubsInput>
    create: XOR<users_clubsCreateWithoutClubsInput, users_clubsUncheckedCreateWithoutClubsInput>
  }

  export type users_clubsUpdateWithWhereUniqueWithoutClubsInput = {
    where: users_clubsWhereUniqueInput
    data: XOR<users_clubsUpdateWithoutClubsInput, users_clubsUncheckedUpdateWithoutClubsInput>
  }

  export type users_clubsUpdateManyWithWhereWithoutClubsInput = {
    where: users_clubsScalarWhereInput
    data: XOR<users_clubsUpdateManyMutationInput, users_clubsUncheckedUpdateManyWithoutClubsInput>
  }

  export type clubsCreateWithoutUsers_clubsInput = {
    name: string
    posts?: postsCreateNestedManyWithoutClubsInput
  }

  export type clubsUncheckedCreateWithoutUsers_clubsInput = {
    id?: number
    name: string
    posts?: postsUncheckedCreateNestedManyWithoutClubsInput
  }

  export type clubsCreateOrConnectWithoutUsers_clubsInput = {
    where: clubsWhereUniqueInput
    create: XOR<clubsCreateWithoutUsers_clubsInput, clubsUncheckedCreateWithoutUsers_clubsInput>
  }

  export type usersCreateWithoutUsers_clubsInput = {
    username?: string | null
    password?: string | null
    posts?: postsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUsers_clubsInput = {
    id?: number
    username?: string | null
    password?: string | null
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUsers_clubsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUsers_clubsInput, usersUncheckedCreateWithoutUsers_clubsInput>
  }

  export type clubsUpsertWithoutUsers_clubsInput = {
    update: XOR<clubsUpdateWithoutUsers_clubsInput, clubsUncheckedUpdateWithoutUsers_clubsInput>
    create: XOR<clubsCreateWithoutUsers_clubsInput, clubsUncheckedCreateWithoutUsers_clubsInput>
    where?: clubsWhereInput
  }

  export type clubsUpdateToOneWithWhereWithoutUsers_clubsInput = {
    where?: clubsWhereInput
    data: XOR<clubsUpdateWithoutUsers_clubsInput, clubsUncheckedUpdateWithoutUsers_clubsInput>
  }

  export type clubsUpdateWithoutUsers_clubsInput = {
    name?: StringFieldUpdateOperationsInput | string
    posts?: postsUpdateManyWithoutClubsNestedInput
  }

  export type clubsUncheckedUpdateWithoutUsers_clubsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    posts?: postsUncheckedUpdateManyWithoutClubsNestedInput
  }

  export type usersUpsertWithoutUsers_clubsInput = {
    update: XOR<usersUpdateWithoutUsers_clubsInput, usersUncheckedUpdateWithoutUsers_clubsInput>
    create: XOR<usersCreateWithoutUsers_clubsInput, usersUncheckedCreateWithoutUsers_clubsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUsers_clubsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUsers_clubsInput, usersUncheckedUpdateWithoutUsers_clubsInput>
  }

  export type usersUpdateWithoutUsers_clubsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: postsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUsers_clubsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type postsCreateManyUsersInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string | null
    club_id?: number | null
  }

  export type users_clubsCreateManyUsersInput = {
    club_id: number
  }

  export type postsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clubs?: clubsUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type postsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type users_clubsUpdateWithoutUsersInput = {
    clubs?: clubsUpdateOneRequiredWithoutUsers_clubsNestedInput
  }

  export type users_clubsUncheckedUpdateWithoutUsersInput = {
    club_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_clubsUncheckedUpdateManyWithoutUsersInput = {
    club_id?: IntFieldUpdateOperationsInput | number
  }

  export type postsCreateManyClubsInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string | null
    author_id: number
  }

  export type users_clubsCreateManyClubsInput = {
    user_id: number
  }

  export type postsUpdateWithoutClubsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutClubsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type postsUncheckedUpdateManyWithoutClubsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_clubsUpdateWithoutClubsInput = {
    users?: usersUpdateOneRequiredWithoutUsers_clubsNestedInput
  }

  export type users_clubsUncheckedUpdateWithoutClubsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_clubsUncheckedUpdateManyWithoutClubsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}