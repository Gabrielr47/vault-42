import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any };
};

export type Asset = TsSearchable & {
  __typename?: 'Asset';
  _contentTypeId?: Maybe<Scalars['String']['output']>;
  _contentTypeName?: Maybe<Scalars['String']['output']>;
  _createdAt?: Maybe<Scalars['String']['output']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  _references?: Maybe<AssetReferencePaginatedList>;
  _schemaVersion?: Maybe<Scalars['Float']['output']>;
  _shapeId?: Maybe<Scalars['String']['output']>;
  _shapeName?: Maybe<Scalars['String']['output']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']['output']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']['output']>;
  caption?: Maybe<Scalars['JSON']['output']>;
  captionHtml?: Maybe<Scalars['String']['output']>;
  credit?: Maybe<Scalars['JSON']['output']>;
  creditHtml?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  homepageSet?: Maybe<HomepagePaginatedList>;
  mimeType?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  productSet?: Maybe<ProductPaginatedList>;
  /** @deprecated Use path instead */
  s3Key?: Maybe<Scalars['String']['output']>;
  searchSummary?: Maybe<Scalars['String']['output']>;
  sourceUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  uploadStatus?: Maybe<Scalars['String']['output']>;
};

export type Asset_ReferencesArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereAssetReferenceInput>;
};

export type AssetCaptionHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']['input']>;
  headerIdPrefix?: InputMaybe<Scalars['String']['input']>;
  imageConfig?: InputMaybe<Scalars['JSON']['input']>;
  images?: InputMaybe<TsImagesConfig>;
};

export type AssetCreditHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']['input']>;
  headerIdPrefix?: InputMaybe<Scalars['String']['input']>;
  imageConfig?: InputMaybe<Scalars['JSON']['input']>;
  images?: InputMaybe<TsImagesConfig>;
};

export type AssetHomepageSetArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereHomepageInput>;
};

export type AssetProductSetArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereProductInput>;
};

export type AssetPaginatedList = {
  __typename?: 'AssetPaginatedList';
  items: Array<Asset>;
  total: Scalars['Int']['output'];
};

export type AssetReference = Homepage | Product;

export type AssetReferencePaginatedList = {
  __typename?: 'AssetReferencePaginatedList';
  items: Array<AssetReference>;
  total: Scalars['Int']['output'];
};

/** Asset search results */
export type AssetSearchResults = {
  __typename?: 'AssetSearchResults';
  results: Array<Asset>;
  total: Scalars['Int']['output'];
};

export type Category = TsSearchable & {
  __typename?: 'Category';
  Image?: Maybe<Asset>;
  _contentTypeId?: Maybe<Scalars['String']['output']>;
  _contentTypeName?: Maybe<Scalars['String']['output']>;
  _createdAt?: Maybe<Scalars['String']['output']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  _references?: Maybe<ProductPaginatedList>;
  _schemaVersion?: Maybe<Scalars['Float']['output']>;
  _shapeId?: Maybe<Scalars['String']['output']>;
  _shapeName?: Maybe<Scalars['String']['output']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']['output']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  productSet?: Maybe<ProductPaginatedList>;
  searchSummary?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type CategoryImageArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type Category_ReferencesArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereProductInput>;
};

export type CategoryProductSetArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereProductInput>;
};

export type CategoryPaginatedList = {
  __typename?: 'CategoryPaginatedList';
  items: Array<Category>;
  total: Scalars['Int']['output'];
};

/** Category search results */
export type CategorySearchResults = {
  __typename?: 'CategorySearchResults';
  results: Array<Category>;
  total: Scalars['Int']['output'];
};

/** create Asset input */
export type CreateAssetInput = {
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id?: InputMaybe<Scalars['ID']['input']>;
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  caption?: InputMaybe<Scalars['JSON']['input']>;
  credit?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  filename: Scalars['String']['input'];
  mimeType?: InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
  s3Key?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uploadStatus?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAssetResult = {
  __typename?: 'CreateAssetResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Asset>;
};

/** create Category input */
export type CreateCategoryInput = {
  Image: TsRelationshipInput;
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id?: InputMaybe<Scalars['ID']['input']>;
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateCategoryResult = {
  __typename?: 'CreateCategoryResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Category>;
};

/** create Product input */
export type CreateProductInput = {
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id?: InputMaybe<Scalars['ID']['input']>;
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  category: TsRelationshipInput;
  description?: InputMaybe<Scalars['String']['input']>;
  image: TsRelationshipInput;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  salePrice?: InputMaybe<Scalars['Float']['input']>;
  slug: Scalars['String']['input'];
  soldOut?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateProductResult = {
  __typename?: 'CreateProductResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Product>;
};

/** create TSStaticSite input */
export type CreateTsStaticSiteInput = {
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id?: InputMaybe<Scalars['ID']['input']>;
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  destination: Scalars['String']['input'];
  environmentVariables?: InputMaybe<
    Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>
  >;
  idKey?: InputMaybe<Scalars['String']['input']>;
  privateAcl?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: Scalars['String']['input'];
  secretKey?: InputMaybe<Scalars['String']['input']>;
  templateHash?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
};

export type CreateTsStaticSiteResult = {
  __typename?: 'CreateTSStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<TsStaticSite>;
};

export enum DefaultWorkflow {
  Disabled = 'disabled',
  Enabled = 'enabled',
}

/** delete Asset input */
export type DeleteAssetInput = {
  _id: Scalars['ID']['input'];
};

export type DeleteAssetResult = {
  __typename?: 'DeleteAssetResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
};

/** delete Category input */
export type DeleteCategoryInput = {
  _id: Scalars['ID']['input'];
};

export type DeleteCategoryResult = {
  __typename?: 'DeleteCategoryResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
};

/** delete Product input */
export type DeleteProductInput = {
  _id: Scalars['ID']['input'];
};

export type DeleteProductResult = {
  __typename?: 'DeleteProductResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
};

/** delete TSStaticSite input */
export type DeleteTsStaticSiteInput = {
  _id: Scalars['ID']['input'];
};

export type DeleteTsStaticSiteResult = {
  __typename?: 'DeleteTSStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
};

/** duplicate Asset input */
export type DuplicateAssetInput = {
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id: Scalars['ID']['input'];
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  caption?: InputMaybe<Scalars['JSON']['input']>;
  credit?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  s3Key?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uploadStatus?: InputMaybe<Scalars['String']['input']>;
};

export type DuplicateAssetResult = {
  __typename?: 'DuplicateAssetResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Asset>;
};

/** duplicate Category input */
export type DuplicateCategoryInput = {
  Image?: InputMaybe<TsRelationshipInput>;
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id: Scalars['ID']['input'];
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DuplicateCategoryResult = {
  __typename?: 'DuplicateCategoryResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Category>;
};

/** duplicate Product input */
export type DuplicateProductInput = {
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id: Scalars['ID']['input'];
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<TsRelationshipInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<TsRelationshipInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  salePrice?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  soldOut?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DuplicateProductResult = {
  __typename?: 'DuplicateProductResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Product>;
};

/** duplicate TSStaticSite input */
export type DuplicateTsStaticSiteInput = {
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id: Scalars['ID']['input'];
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  destination?: InputMaybe<Scalars['String']['input']>;
  environmentVariables?: InputMaybe<
    Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>
  >;
  idKey?: InputMaybe<Scalars['String']['input']>;
  privateAcl?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  secretKey?: InputMaybe<Scalars['String']['input']>;
  templateHash?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
};

export type DuplicateTsStaticSiteResult = {
  __typename?: 'DuplicateTSStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<TsStaticSite>;
};

export type Homepage = TsSearchable & {
  __typename?: 'Homepage';
  _contentTypeId?: Maybe<Scalars['String']['output']>;
  _contentTypeName?: Maybe<Scalars['String']['output']>;
  _createdAt?: Maybe<Scalars['String']['output']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  _schemaVersion?: Maybe<Scalars['Float']['output']>;
  _shapeId?: Maybe<Scalars['String']['output']>;
  _shapeName?: Maybe<Scalars['String']['output']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']['output']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']['output']>;
  hero?: Maybe<HomepageHero>;
  searchSummary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HomepageHero = {
  __typename?: 'HomepageHero';
  featuredProduct?: Maybe<Product>;
  image?: Maybe<Asset>;
};

export type HomepageHeroFeaturedProductArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HomepageHeroImageArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HomepageHeroInput = {
  featuredProduct?: InputMaybe<TsRelationshipInput>;
  image?: InputMaybe<TsRelationshipInput>;
};

export type HomepagePaginatedList = {
  __typename?: 'HomepagePaginatedList';
  items: Array<Homepage>;
  total: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create Asset */
  createAsset?: Maybe<CreateAssetResult>;
  /** Create Category */
  createCategory?: Maybe<CreateCategoryResult>;
  /** Create Product */
  createProduct?: Maybe<CreateProductResult>;
  /** Create TSStaticSite */
  createTSStaticSite?: Maybe<CreateTsStaticSiteResult>;
  /** Delete Asset */
  deleteAsset?: Maybe<DeleteAssetResult>;
  /** Delete Category */
  deleteCategory?: Maybe<DeleteCategoryResult>;
  /** Delete Product */
  deleteProduct?: Maybe<DeleteProductResult>;
  /** Delete TSStaticSite */
  deleteTSStaticSite?: Maybe<DeleteTsStaticSiteResult>;
  /** Duplicate Asset */
  duplicateAsset?: Maybe<DuplicateAssetResult>;
  /** Duplicate Category */
  duplicateCategory?: Maybe<DuplicateCategoryResult>;
  /** Duplicate Product */
  duplicateProduct?: Maybe<DuplicateProductResult>;
  /** Duplicate TSStaticSite */
  duplicateTSStaticSite?: Maybe<DuplicateTsStaticSiteResult>;
  /** Replace an asset file */
  replaceAsset?: Maybe<Upload>;
  /** Update Asset */
  updateAsset?: Maybe<UpdateAssetResult>;
  /** Update Category */
  updateCategory?: Maybe<UpdateCategoryResult>;
  /** Update Homepage */
  updateHomepage?: Maybe<UpdateHomepageResult>;
  /** Update Product */
  updateProduct?: Maybe<UpdateProductResult>;
  /** Update SiteSettings */
  updateSiteSettings?: Maybe<UpdateSiteSettingsResult>;
  /** Update TSStaticSite */
  updateTSStaticSite?: Maybe<UpdateTsStaticSiteResult>;
  /** Initiate upload process for asset(s) */
  uploadAssets?: Maybe<Array<Maybe<Upload>>>;
};

export type MutationCreateAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  input: CreateAssetInput;
};

export type MutationCreateCategoryArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  input: CreateCategoryInput;
};

export type MutationCreateProductArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  input: CreateProductInput;
};

export type MutationCreateTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  input: CreateTsStaticSiteInput;
};

export type MutationDeleteAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  input: DeleteAssetInput;
};

export type MutationDeleteCategoryArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  input: DeleteCategoryInput;
};

export type MutationDeleteProductArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  input: DeleteProductInput;
};

export type MutationDeleteTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  input: DeleteTsStaticSiteInput;
};

export type MutationDuplicateAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  input: DuplicateAssetInput;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDuplicateCategoryArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  input: DuplicateCategoryInput;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDuplicateProductArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  input: DuplicateProductInput;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDuplicateTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  input: DuplicateTsStaticSiteInput;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MutationReplaceAssetArgs = {
  _id: Scalars['ID']['input'];
  _version: Scalars['Int']['input'];
  file: TsFile;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationUpdateAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  input: UpdateAssetInput;
  locale?: InputMaybe<Scalars['String']['input']>;
  structure?: InputMaybe<Array<InputMaybe<TsContentStructureInput>>>;
};

export type MutationUpdateCategoryArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  input: UpdateCategoryInput;
  locale?: InputMaybe<Scalars['String']['input']>;
  structure?: InputMaybe<Array<InputMaybe<TsContentStructureInput>>>;
};

export type MutationUpdateHomepageArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  input: UpdateHomepageInput;
  locale?: InputMaybe<Scalars['String']['input']>;
  structure?: InputMaybe<Array<InputMaybe<TsContentStructureInput>>>;
};

export type MutationUpdateProductArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  input: UpdateProductInput;
  locale?: InputMaybe<Scalars['String']['input']>;
  structure?: InputMaybe<Array<InputMaybe<TsContentStructureInput>>>;
};

export type MutationUpdateSiteSettingsArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  input: UpdateSiteSettingsInput;
  locale?: InputMaybe<Scalars['String']['input']>;
  structure?: InputMaybe<Array<InputMaybe<TsContentStructureInput>>>;
};

export type MutationUpdateTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  input: UpdateTsStaticSiteInput;
  locale?: InputMaybe<Scalars['String']['input']>;
  structure?: InputMaybe<Array<InputMaybe<TsContentStructureInput>>>;
};

export type MutationUploadAssetsArgs = {
  files: Array<InputMaybe<TsFile>>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type Product = TsSearchable & {
  __typename?: 'Product';
  _contentTypeId?: Maybe<Scalars['String']['output']>;
  _contentTypeName?: Maybe<Scalars['String']['output']>;
  _createdAt?: Maybe<Scalars['String']['output']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  _references?: Maybe<HomepagePaginatedList>;
  _schemaVersion?: Maybe<Scalars['Float']['output']>;
  _shapeId?: Maybe<Scalars['String']['output']>;
  _shapeName?: Maybe<Scalars['String']['output']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']['output']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Category>;
  description?: Maybe<Scalars['String']['output']>;
  heroFeaturedPost?: Maybe<HomepagePaginatedList>;
  image?: Maybe<Asset>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  salePrice?: Maybe<Scalars['Float']['output']>;
  searchSummary?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  soldOut?: Maybe<Scalars['Boolean']['output']>;
};

export type Product_ReferencesArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereHomepageInput>;
};

export type ProductCategoryArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProductHeroFeaturedPostArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereHomepageInput>;
};

export type ProductImageArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProductPaginatedList = {
  __typename?: 'ProductPaginatedList';
  items: Array<Product>;
  total: Scalars['Int']['output'];
};

/** Product search results */
export type ProductSearchResults = {
  __typename?: 'ProductSearchResults';
  results: Array<Product>;
  total: Scalars['Int']['output'];
};

/** Root of the Schema */
export type Query = {
  __typename?: 'Query';
  /** Get a Asset by ID */
  getAsset?: Maybe<Asset>;
  /** Returns a list Asset in natural order. */
  getAssetList?: Maybe<AssetPaginatedList>;
  /** Get a Category by ID */
  getCategory?: Maybe<Category>;
  /** Get a Category by Slug */
  getCategoryBySlug?: Maybe<Category>;
  /** Returns a list Category in natural order. */
  getCategoryList?: Maybe<CategoryPaginatedList>;
  /** List Versions for a piece of content */
  getContentVersion?: Maybe<TsVersionResponse>;
  /** List Versions for a piece of content */
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  /** Get a Homepage by ID */
  getHomepage?: Maybe<Homepage>;
  /** Get a Product by ID */
  getProduct?: Maybe<Product>;
  /** Returns a list Product in natural order. */
  getProductList?: Maybe<ProductPaginatedList>;
  /** Get a SiteSettings by ID */
  getSiteSettings?: Maybe<SiteSettings>;
  /** Get a TSStaticSite by ID */
  getTSStaticSite?: Maybe<TsStaticSite>;
  /** Returns a list TSStaticSite in natural order. */
  getTSStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  search?: Maybe<TsSearchableSearchResults>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  searchCategoryIndex?: Maybe<CategorySearchResults>;
  searchProductIndex?: Maybe<ProductSearchResults>;
  searchTSStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
  withContext?: Maybe<TsWithContext>;
};

/** Root of the Schema */
export type QueryGetAssetArgs = {
  _id: Scalars['ID']['input'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Root of the Schema */
export type QueryGetAssetListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereAssetInput>;
};

/** Root of the Schema */
export type QueryGetCategoryArgs = {
  _id: Scalars['ID']['input'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Root of the Schema */
export type QueryGetCategoryBySlugArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Root of the Schema */
export type QueryGetCategoryListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereCategoryInput>;
};

/** Root of the Schema */
export type QueryGetContentVersionArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Int']['input'];
};

/** Root of the Schema */
export type QueryGetContentVersionListArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** Root of the Schema */
export type QueryGetHomepageArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Root of the Schema */
export type QueryGetProductArgs = {
  _id: Scalars['ID']['input'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Root of the Schema */
export type QueryGetProductListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereProductInput>;
};

/** Root of the Schema */
export type QueryGetSiteSettingsArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Root of the Schema */
export type QueryGetTsStaticSiteArgs = {
  _id: Scalars['ID']['input'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Root of the Schema */
export type QueryGetTsStaticSiteListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};

/** Root of the Schema */
export type QuerySearchArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereInput>;
};

/** Root of the Schema */
export type QuerySearchAssetIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereAssetInput>;
};

/** Root of the Schema */
export type QuerySearchCategoryIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereCategoryInput>;
};

/** Root of the Schema */
export type QuerySearchProductIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereProductInput>;
};

/** Root of the Schema */
export type QuerySearchTsStaticSiteIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};

/** Root of the Schema */
export type QueryTaxonomySuggestArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSON']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
};

/** Root of the Schema */
export type QueryWithContextArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteSettings = TsSearchable & {
  __typename?: 'SiteSettings';
  _contentTypeId?: Maybe<Scalars['String']['output']>;
  _contentTypeName?: Maybe<Scalars['String']['output']>;
  _createdAt?: Maybe<Scalars['String']['output']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  _schemaVersion?: Maybe<Scalars['Float']['output']>;
  _shapeId?: Maybe<Scalars['String']['output']>;
  _shapeName?: Maybe<Scalars['String']['output']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']['output']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']['output']>;
  searchSummary?: Maybe<Scalars['String']['output']>;
  siteTitle?: Maybe<Scalars['String']['output']>;
};

/** Describes a structural update to an array of data. */
export type TsContentStructureInput = {
  /** A deep path to the array being updated (e.g. a.b[1].c). */
  path: Scalars['String']['input'];
  /** An array where the indices represent the to index, and the values represent the from index.For example to transform ["a","b","c","d"] into ["c","a"], this value would be [2,0]. */
  structure?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type TsFile = {
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type TsImagesConfig = {
  /** Default image parameters. See https://docs.imgix.com/apis/url  */
  default?: InputMaybe<Scalars['JSON']['input']>;
  /** Large image parameters. See https://docs.imgix.com/apis/url  */
  large?: InputMaybe<Scalars['JSON']['input']>;
  /** Medium image parameters. See https://docs.imgix.com/apis/url  */
  medium?: InputMaybe<Scalars['JSON']['input']>;
  /** Small image parameters. See https://docs.imgix.com/apis/url  */
  small?: InputMaybe<Scalars['JSON']['input']>;
};

export type TsProjectMember = {
  __typename?: 'TSProjectMember';
  avatarPath?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type TsRelationshipInput = {
  contentTypeId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  shapeId?: InputMaybe<Scalars['String']['input']>;
  shapeName?: InputMaybe<Scalars['String']['input']>;
};

export type TsSearchSort = {
  field: Scalars['String']['input'];
  /** "asc" for ascending or "desc" for descending */
  order: Scalars['String']['input'];
};

export type TsSearchSortInput = {
  field: Scalars['String']['input'];
  /** "asc" for ascending or "desc" for descending */
  order: Scalars['String']['input'];
};

export type TsSearchable = {
  _id?: Maybe<Scalars['ID']['output']>;
  _shapeId?: Maybe<Scalars['String']['output']>;
  searchSummary?: Maybe<Scalars['String']['output']>;
};

/** TSSearchable search results */
export type TsSearchableSearchResults = {
  __typename?: 'TSSearchableSearchResults';
  results: Array<TsSearchable>;
  total: Scalars['Int']['output'];
};

export type TsStaticSite = TsSearchable & {
  __typename?: 'TSStaticSite';
  _contentTypeId?: Maybe<Scalars['String']['output']>;
  _contentTypeName?: Maybe<Scalars['String']['output']>;
  _createdAt?: Maybe<Scalars['String']['output']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  _schemaVersion?: Maybe<Scalars['Float']['output']>;
  _shapeId?: Maybe<Scalars['String']['output']>;
  _shapeName?: Maybe<Scalars['String']['output']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']['output']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']['output']>;
  baseUrl?: Maybe<Scalars['String']['output']>;
  destination: Scalars['String']['output'];
  environmentVariables?: Maybe<Array<Maybe<TsStaticSiteEnvironmentVariables>>>;
  idKey?: Maybe<Scalars['String']['output']>;
  privateAcl?: Maybe<Scalars['Boolean']['output']>;
  provider: Scalars['String']['output'];
  searchSummary?: Maybe<Scalars['String']['output']>;
  secretKey?: Maybe<Scalars['String']['output']>;
  templateHash?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  triggers?: Maybe<Array<Maybe<TsStaticSiteTriggers>>>;
};

export type TsStaticSiteEnvironmentVariables = {
  __typename?: 'TSStaticSiteEnvironmentVariables';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TsStaticSiteEnvironmentVariablesInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TsStaticSitePaginatedList = {
  __typename?: 'TSStaticSitePaginatedList';
  items: Array<TsStaticSite>;
  total: Scalars['Int']['output'];
};

/** TSStaticSite search results */
export type TsStaticSiteSearchResults = {
  __typename?: 'TSStaticSiteSearchResults';
  results: Array<TsStaticSite>;
  total: Scalars['Int']['output'];
};

export type TsStaticSiteTriggers = {
  __typename?: 'TSStaticSiteTriggers';
  contentTypeId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TsStaticSiteTriggersInput = {
  contentTypeId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type TsSuggestion = {
  __typename?: 'TSSuggestion';
  _id?: Maybe<Scalars['ID']['output']>;
  _shapeId?: Maybe<Scalars['ID']['output']>;
  _shapeName?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type TsSuggestionPaginatedList = {
  __typename?: 'TSSuggestionPaginatedList';
  items?: Maybe<Array<Maybe<TsSuggestion>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type TsUser = {
  __typename?: 'TSUser';
  avatarPath?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type TsVersion = {
  __typename?: 'TSVersion';
  color?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  item?: Maybe<TsVersionResponse>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<TsProjectMember>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type TsVersionItemArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TsVersionResponse = {
  __typename?: 'TSVersionResponse';
  content?: Maybe<Scalars['JSONObject']['output']>;
  schema?: Maybe<Scalars['JSONObject']['output']>;
};

export type TsVersionsPaginatedList = {
  __typename?: 'TSVersionsPaginatedList';
  from?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<TsVersion>>>;
  size?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type TsWhereAssetInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereAssetInput>>>;
  NOT?: InputMaybe<TsWhereAssetInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereAssetInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereAssetReferenceInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereAssetReferenceInput>>>;
  NOT?: InputMaybe<TsWhereAssetReferenceInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereAssetReferenceInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  category?: InputMaybe<TsWhereCategoryRelationshipInput>;
  description?: InputMaybe<TsWhereStringInput>;
  hero?: InputMaybe<TsWhereHomepageHeroInput>;
  image?: InputMaybe<TsWhereAssetRelationshipInput>;
  name?: InputMaybe<TsWhereStringInput>;
  price?: InputMaybe<TsWhereNumberInput>;
  salePrice?: InputMaybe<TsWhereNumberInput>;
  slug?: InputMaybe<TsWhereStringInput>;
  soldOut?: InputMaybe<TsWhereBooleanInput>;
  title?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereAssetRelationshipInput = {
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereBooleanInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TsWhereCategoryInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereCategoryInput>>>;
  Image?: InputMaybe<TsWhereAssetRelationshipInput>;
  NOT?: InputMaybe<TsWhereCategoryInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereCategoryInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  description?: InputMaybe<TsWhereStringInput>;
  slug?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereCategoryRelationshipInput = {
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  description?: InputMaybe<TsWhereStringInput>;
  slug?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereDateInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['String']['input']>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['String']['input']>;
};

export type TsWhereDraftjsInput = {
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']['input']>;
};

export type TsWhereHomepageHeroInput = {
  featuredProduct?: InputMaybe<TsWhereProductRelationshipInput>;
  image?: InputMaybe<TsWhereAssetRelationshipInput>;
};

export type TsWhereHomepageInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereHomepageInput>>>;
  NOT?: InputMaybe<TsWhereHomepageInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereHomepageInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  hero?: InputMaybe<TsWhereHomepageHeroInput>;
  title?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereIdInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TsWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereInput>>>;
  Image?: InputMaybe<TsWhereAssetRelationshipInput>;
  NOT?: InputMaybe<TsWhereInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  category?: InputMaybe<TsWhereCategoryRelationshipInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  hero?: InputMaybe<TsWhereHomepageHeroInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  image?: InputMaybe<TsWhereAssetRelationshipInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  price?: InputMaybe<TsWhereNumberInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  salePrice?: InputMaybe<TsWhereNumberInput>;
  siteTitle?: InputMaybe<TsWhereStringInput>;
  slug?: InputMaybe<TsWhereStringInput>;
  soldOut?: InputMaybe<TsWhereBooleanInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereIntegerInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Less than */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['Int']['input']>;
};

export type TsWhereNumberInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Less than */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['Float']['input']>;
};

export type TsWhereProductInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereProductInput>>>;
  NOT?: InputMaybe<TsWhereProductInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereProductInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  category?: InputMaybe<TsWhereCategoryRelationshipInput>;
  description?: InputMaybe<TsWhereStringInput>;
  image?: InputMaybe<TsWhereAssetRelationshipInput>;
  name?: InputMaybe<TsWhereStringInput>;
  price?: InputMaybe<TsWhereNumberInput>;
  salePrice?: InputMaybe<TsWhereNumberInput>;
  slug?: InputMaybe<TsWhereStringInput>;
  soldOut?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereProductRelationshipInput = {
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  description?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  price?: InputMaybe<TsWhereNumberInput>;
  salePrice?: InputMaybe<TsWhereNumberInput>;
  slug?: InputMaybe<TsWhereStringInput>;
  soldOut?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereStringInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']['input']>;
};

export type TsWhereTsStaticSiteEnvironmentVariablesInput = {
  name?: InputMaybe<TsWhereStringInput>;
  value?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereTsStaticSiteTriggersInput = {
  contentTypeId?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereTsStaticSiteInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteInput>>>;
  NOT?: InputMaybe<TsWhereTsStaticSiteInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
};

export type TsWhereWorkflowInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['String']['input']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['String']['input']>;
};

/** This query allow you to pass context to your queries */
export type TsWithContext = {
  __typename?: 'TSWithContext';
  /** Get a Asset by ID */
  getAsset?: Maybe<Asset>;
  /** Returns a list Asset in natural order. */
  getAssetList?: Maybe<AssetPaginatedList>;
  /** Get a Category by ID */
  getCategory?: Maybe<Category>;
  /** Get a Category by Slug */
  getCategoryBySlug?: Maybe<Category>;
  /** Returns a list Category in natural order. */
  getCategoryList?: Maybe<CategoryPaginatedList>;
  /** List Versions for a piece of content */
  getContentVersion?: Maybe<TsVersionResponse>;
  /** List Versions for a piece of content */
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  /** Get a Homepage by ID */
  getHomepage?: Maybe<Homepage>;
  /** Get a Product by ID */
  getProduct?: Maybe<Product>;
  /** Returns a list Product in natural order. */
  getProductList?: Maybe<ProductPaginatedList>;
  /** Get a SiteSettings by ID */
  getSiteSettings?: Maybe<SiteSettings>;
  /** Get a TSStaticSite by ID */
  getTSStaticSite?: Maybe<TsStaticSite>;
  /** Returns a list TSStaticSite in natural order. */
  getTSStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  search?: Maybe<TsSearchableSearchResults>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  searchCategoryIndex?: Maybe<CategorySearchResults>;
  searchProductIndex?: Maybe<ProductSearchResults>;
  searchTSStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetAssetArgs = {
  _id: Scalars['ID']['input'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetAssetListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereAssetInput>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetCategoryArgs = {
  _id: Scalars['ID']['input'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetCategoryBySlugArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetCategoryListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereCategoryInput>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetContentVersionArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Int']['input'];
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetContentVersionListArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetHomepageArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetProductArgs = {
  _id: Scalars['ID']['input'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetProductListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereProductInput>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetSiteSettingsArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetTsStaticSiteArgs = {
  _id: Scalars['ID']['input'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextGetTsStaticSiteListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextSearchArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereInput>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextSearchAssetIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereAssetInput>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextSearchCategoryIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereCategoryInput>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextSearchProductIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereProductInput>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextSearchTsStaticSiteIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};

/** This query allow you to pass context to your queries */
export type TsWithContextTaxonomySuggestArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSON']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']['input']>;
};

/** update Asset input */
export type UpdateAssetInput = {
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id: Scalars['ID']['input'];
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  caption?: InputMaybe<Scalars['JSON']['input']>;
  credit?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  s3Key?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uploadStatus?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAssetResult = {
  __typename?: 'UpdateAssetResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Asset>;
};

/** update Category input */
export type UpdateCategoryInput = {
  Image?: InputMaybe<TsRelationshipInput>;
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id: Scalars['ID']['input'];
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryResult = {
  __typename?: 'UpdateCategoryResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Category>;
};

/** update Homepage input */
export type UpdateHomepageInput = {
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id?: InputMaybe<Scalars['ID']['input']>;
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  hero?: InputMaybe<HomepageHeroInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHomepageResult = {
  __typename?: 'UpdateHomepageResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Homepage>;
};

/** update Product input */
export type UpdateProductInput = {
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id: Scalars['ID']['input'];
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<TsRelationshipInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<TsRelationshipInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  salePrice?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  soldOut?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateProductResult = {
  __typename?: 'UpdateProductResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Product>;
};

/** update SiteSettings input */
export type UpdateSiteSettingsInput = {
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id?: InputMaybe<Scalars['ID']['input']>;
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  siteTitle?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSiteSettingsResult = {
  __typename?: 'UpdateSiteSettingsResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<SiteSettings>;
};

/** update TSStaticSite input */
export type UpdateTsStaticSiteInput = {
  _contentTypeId?: InputMaybe<Scalars['String']['input']>;
  _contentTypeName?: InputMaybe<Scalars['String']['input']>;
  _createdAt?: InputMaybe<Scalars['String']['input']>;
  _createdBy?: InputMaybe<Scalars['String']['input']>;
  _enabled?: InputMaybe<Scalars['Boolean']['input']>;
  _enabledAt?: InputMaybe<Scalars['String']['input']>;
  _id: Scalars['ID']['input'];
  _schemaVersion?: InputMaybe<Scalars['Float']['input']>;
  _shapeId?: InputMaybe<Scalars['String']['input']>;
  _shapeName?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']['input']>;
  _updatedBy?: InputMaybe<Scalars['String']['input']>;
  _version?: InputMaybe<Scalars['Int']['input']>;
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  destination?: InputMaybe<Scalars['String']['input']>;
  environmentVariables?: InputMaybe<
    Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>
  >;
  idKey?: InputMaybe<Scalars['String']['input']>;
  privateAcl?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  secretKey?: InputMaybe<Scalars['String']['input']>;
  templateHash?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
};

export type UpdateTsStaticSiteResult = {
  __typename?: 'UpdateTSStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<TsStaticSite>;
};

/** A project file stored on s3 */
export type Upload = {
  __typename?: 'Upload';
  asset?: Maybe<Asset>;
  uploadUrl?: Maybe<Scalars['ID']['output']>;
};

export type GetCategoryListQueryVariables = Exact<{ [key: string]: never }>;

export type GetCategoryListQuery = {
  __typename?: 'Query';
  getCategoryList?: {
    __typename?: 'CategoryPaginatedList';
    total: number;
    items: Array<{
      __typename?: 'Category';
      _id?: string | null;
      description?: string | null;
      slug: string;
      title: string;
      Image?: {
        __typename?: 'Asset';
        path: string;
        title?: string | null;
      } | null;
    }>;
  } | null;
};

export type GetCategoryBySlugQueryVariables = Exact<{
  where?: InputMaybe<TsWhereCategoryInput>;
}>;

export type GetCategoryBySlugQuery = {
  __typename?: 'Query';
  getCategoryList?: {
    __typename?: 'CategoryPaginatedList';
    total: number;
    items: Array<{
      __typename?: 'Category';
      _id?: string | null;
      description?: string | null;
      slug: string;
      title: string;
      Image?: {
        __typename?: 'Asset';
        _id?: string | null;
        path: string;
        title?: string | null;
      } | null;
    }>;
  } | null;
};

export type GetAllProductsFromCategoryQueryVariables = Exact<{
  where?: InputMaybe<TsWhereProductInput>;
}>;

export type GetAllProductsFromCategoryQuery = {
  __typename?: 'Query';
  getProductList?: {
    __typename?: 'ProductPaginatedList';
    total: number;
    items: Array<{
      __typename?: 'Product';
      _id?: string | null;
      description?: string | null;
      name: string;
      price: number;
      salePrice?: number | null;
      slug: string;
      soldOut?: boolean | null;
      category?: {
        __typename?: 'Category';
        _id?: string | null;
        description?: string | null;
        slug: string;
        title: string;
        Image?: { __typename?: 'Asset'; path: string } | null;
      } | null;
      image?: {
        __typename?: 'Asset';
        _id?: string | null;
        caption?: any | null;
        credit?: any | null;
        description?: string | null;
        filename: string;
        mimeType?: string | null;
        path: string;
        sourceUrl?: string | null;
        title?: string | null;
        uploadStatus?: string | null;
      } | null;
    }>;
  } | null;
};

export type GetProductListQueryVariables = Exact<{
  size?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetProductListQuery = {
  __typename?: 'Query';
  getProductList?: {
    __typename?: 'ProductPaginatedList';
    total: number;
    items: Array<{
      __typename?: 'Product';
      _id?: string | null;
      description?: string | null;
      slug: string;
      name: string;
      price: number;
      category?: {
        __typename?: 'Category';
        _id?: string | null;
        description?: string | null;
        slug: string;
        title: string;
      } | null;
      image?: {
        __typename?: 'Asset';
        _id?: string | null;
        path: string;
      } | null;
    }>;
  } | null;
};

export type GetProductListBySlugQueryVariables = Exact<{
  where?: InputMaybe<TsWhereProductInput>;
}>;

export type GetProductListBySlugQuery = {
  __typename?: 'Query';
  getProductList?: {
    __typename?: 'ProductPaginatedList';
    total: number;
    items: Array<{
      __typename?: 'Product';
      _id?: string | null;
      description?: string | null;
      slug: string;
      name: string;
      price: number;
      category?: {
        __typename?: 'Category';
        _id?: string | null;
        description?: string | null;
        slug: string;
        title: string;
      } | null;
      image?: {
        __typename?: 'Asset';
        _id?: string | null;
        path: string;
      } | null;
    }>;
  } | null;
};

export const GetCategoryListDocument = gql`
  query getCategoryList {
    getCategoryList {
      items {
        Image {
          path
          title
        }
        _id
        description
        slug
        title
      }
      total
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetCategoryListGQL extends Apollo.Query<
  GetCategoryListQuery,
  GetCategoryListQueryVariables
> {
  document = GetCategoryListDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetCategoryBySlugDocument = gql`
  query getCategoryBySlug($where: TSWhereCategoryInput) {
    getCategoryList(where: $where) {
      items {
        Image {
          _id
          path
          title
        }
        _id
        description
        slug
        title
      }
      total
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetCategoryBySlugGQL extends Apollo.Query<
  GetCategoryBySlugQuery,
  GetCategoryBySlugQueryVariables
> {
  document = GetCategoryBySlugDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetAllProductsFromCategoryDocument = gql`
  query getAllProductsFromCategory($where: TSWhereProductInput) {
    getProductList(where: $where) {
      items {
        _id
        category {
          _id
          description
          slug
          title
          Image {
            path
          }
        }
        description
        image {
          _id
          caption
          credit
          description
          filename
          mimeType
          path
          sourceUrl
          title
          uploadStatus
        }
        name
        price
        salePrice
        slug
        soldOut
      }
      total
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetAllProductsFromCategoryGQL extends Apollo.Query<
  GetAllProductsFromCategoryQuery,
  GetAllProductsFromCategoryQueryVariables
> {
  document = GetAllProductsFromCategoryDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetProductListDocument = gql`
  query getProductList($size: Int, $from: Int) {
    getProductList(size: $size, from: $from) {
      items {
        _id
        category {
          _id
          description
          slug
          title
        }
        description
        image {
          _id
          path
        }
        slug
        name
        price
      }
      total
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetProductListGQL extends Apollo.Query<
  GetProductListQuery,
  GetProductListQueryVariables
> {
  document = GetProductListDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetProductListBySlugDocument = gql`
  query getProductListBySlug($where: TSWhereProductInput) {
    getProductList(where: $where) {
      items {
        _id
        category {
          _id
          description
          slug
          title
        }
        description
        image {
          _id
          path
        }
        slug
        name
        price
      }
      total
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetProductListBySlugGQL extends Apollo.Query<
  GetProductListBySlugQuery,
  GetProductListBySlugQueryVariables
> {
  document = GetProductListBySlugDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
