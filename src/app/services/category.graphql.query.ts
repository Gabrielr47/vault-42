import { gql } from 'apollo-angular';

export const GET_CATEGORY_LIST = gql`
  {
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
