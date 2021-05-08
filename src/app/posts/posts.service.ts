import { Apollo, ApolloBase } from 'apollo-angular';
import { ApolloQueryResult, gql } from '@apollo/client/core';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const GET_POST = gql`
  query GetPosts {
    posts {
      id
      title
    }
  }
`;
@Injectable()
export class PostsService {

  apollo!: any;
  constructor(private $apolloProvider: Apollo) {
    this.apollo = this.$apolloProvider.use('newClientName');
  }

  getPosts(): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query: GET_POST,
    }).valueChanges;
  }
}
