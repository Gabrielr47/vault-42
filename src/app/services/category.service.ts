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
}
