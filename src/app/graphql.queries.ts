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

export const GET_CATEGORY_LIST = gql`
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

export const GET_CATEGORY_BY_SLUG = gql`
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
