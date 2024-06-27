import * as Types from '../../../types';

export type GetCategoryListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCategoryListQuery = { __typename?: 'Query', getCategoryList?: { __typename?: 'CategoryPaginatedList', total: number, items: Array<{ __typename?: 'Category', _id?: string | null, description?: string | null, slug: string, title: string, Image?: { __typename?: 'Asset', path: string, title?: string | null } | null }> } | null };

export type GetCategoryBySlugQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.TsWhereCategoryInput>;
}>;


export type GetCategoryBySlugQuery = { __typename?: 'Query', getCategoryList?: { __typename?: 'CategoryPaginatedList', total: number, items: Array<{ __typename?: 'Category', _id?: string | null, description?: string | null, slug: string, title: string, Image?: { __typename?: 'Asset', _id?: string | null, path: string, title?: string | null } | null }> } | null };
