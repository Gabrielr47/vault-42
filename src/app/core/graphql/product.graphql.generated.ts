import * as Types from '../../../types';

export type GetProductListQueryVariables = Types.Exact<{
  size?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  from?: Types.InputMaybe<Types.Scalars['Int']['input']>;
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

export type GetProductListBySlugQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.TsWhereProductInput>;
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

export type GetProductsQueryQueryVariables = Types.Exact<{
  query: Types.Scalars['String']['input'];
}>;

export type GetProductsQueryQuery = {
  __typename?: 'Query';
  getProductList?: {
    __typename?: 'ProductPaginatedList';
    total: number;
    items: Array<{
      __typename?: 'Product';
      _id?: string | null;
      name: string;
      price: number;
      slug: string;
      image?: {
        __typename?: 'Asset';
        _id?: string | null;
        path: string;
        title?: string | null;
      } | null;
    }>;
  } | null;
};
