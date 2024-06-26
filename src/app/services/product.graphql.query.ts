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
