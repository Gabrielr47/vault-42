import { gql } from 'apollo-angular';

export const GET_PRODUCT_LIST = gql`
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

// $where is better for filtering specific data structures such as exact matches for slug
export const GET_PRODUCT_LIST_BY_SLUG = gql`
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

// $query is better for searching for data that may not have an exact match such as a name
export const GET_PRODUCTS_BY_NAME = gql`
  query getProductsQuery($query: String!) {
    getProductList(terms: $query) {
      items {
        _id
        image {
          _id
          path
          title
        }
        name
        price
        slug
      }
      total
    }
  }
`;
