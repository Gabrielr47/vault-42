import * as Types from '../../../types';

export type GetCategoryListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCategoryListQuery = { __typename?: 'Query', getCategoryList?: { __typename?: 'CategoryPaginatedList', total: number, items: Array<{ __typename?: 'Category', _id?: string | null, description?: string | null, slug: string, title: string, Image?: { __typename?: 'Asset', path: string, title?: string | null } | null }> } | null };

export type GetCategoryBySlugQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.TsWhereCategoryInput>;
}>;


export type GetCategoryBySlugQuery = { __typename?: 'Query', getCategoryList?: { __typename?: 'CategoryPaginatedList', total: number, items: Array<{ __typename?: 'Category', _id?: string | null, description?: string | null, slug: string, title: string, Image?: { __typename?: 'Asset', _id?: string | null, path: string, title?: string | null } | null }> } | null };

export type GetAllProductsFromCategoryQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.TsWhereProductInput>;
}>;


export type GetAllProductsFromCategoryQuery = { __typename?: 'Query', getProductList?: { __typename?: 'ProductPaginatedList', total: number, items: Array<{ __typename?: 'Product', _id?: string | null, description?: string | null, name: string, price: number, salePrice?: number | null, slug: string, soldOut?: boolean | null, category?: { __typename?: 'Category', _id?: string | null, description?: string | null, slug: string, title: string, Image?: { __typename?: 'Asset', path: string } | null } | null, image?: { __typename?: 'Asset', _id?: string | null, caption?: any | null, credit?: any | null, description?: string | null, filename: string, mimeType?: string | null, path: string, sourceUrl?: string | null, title?: string | null, uploadStatus?: string | null } | null }> } | null };
