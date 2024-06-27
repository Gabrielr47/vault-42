import { gql } from 'apollo-angular';

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

export const GET_ALL_PRODUCTS_FROM_CATEGORY = gql`
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
