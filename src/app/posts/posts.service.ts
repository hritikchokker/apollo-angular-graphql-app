import {
  Apollo,
  ApolloBase,
  QueryRef
} from 'apollo-angular';
import {
  ApolloQueryResult,
  gql
} from '@apollo/client/core';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {

  apollo!: ApolloBase;
  constructor(private $apolloProvider: Apollo) {
    this.apollo = this.$apolloProvider.use('graphqlHeroku');
  }

  getPosts(query: any): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query
    }).valueChanges;
  }

  queryWithPolling(query: any) {
    return this.apollo.watchQuery({ query, pollInterval: 500 }).valueChanges;
  }

  getAuthorsPost(query: any, authorId: number): Observable<any> {
    return this.apollo.watchQuery({ query, variables: { authorId } })
      .valueChanges;
  }
  getFeed(query: any): Observable<any> {
    return this.apollo.watchQuery({ query })
      .valueChanges;
    // .pipe(map((result: any) => result.data.posts));
  }
}


