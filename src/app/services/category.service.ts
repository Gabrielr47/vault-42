import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_CATEGORY_LIST = gql`
  {
    getCategoryList {
      items {
        Image {
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
        _id
        description
        slug
        title
      }
      total
    }
  }
`;

const GET_CATEGORY_BY_ID = gql`
  query ($_id: ID!) {
    getCategory(_id: $_id) {
      Image {
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
      _id
      description
      slug
      title
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly apollo: Apollo) {}

  getCategoryList() {
    return this.apollo.watchQuery({
      query: GET_CATEGORY_LIST,
    });
  }

  getCategory(_id: string) {
    return this.apollo.watchQuery({
      query: GET_CATEGORY_BY_ID,
      variables: {
        _id,
      },
    });
  }
}
