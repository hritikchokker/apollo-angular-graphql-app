import {
  Apollo,
  ApolloBase
} from 'apollo-angular';
import {
  ApolloQueryResult,
  gql
} from '@apollo/client/core';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GET_POST } from './queries';

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

  fetchPostDetail(postId: any): Observable<any> {
    return this.getPosts(GET_POST)
      .pipe(map(({ data }: any) => data.posts.filter((el: any) => el.id === +postId)));
  }

  queryWithPolling(query: any): Observable<any> {
    return this.apollo.watchQuery({ query, pollInterval: 500 }).valueChanges;
  }

  upVote(mutation: any, postId: any): Observable<any> {
    return this.apollo.mutate({
      mutation,
      variables: {
        postId
      }
    });
  }

  updatePost(mutation: any, variables: any): Observable<any> {
    return this.apollo.mutate({
      mutation,
      // variables: {
      //   postId
      // }
    });
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


