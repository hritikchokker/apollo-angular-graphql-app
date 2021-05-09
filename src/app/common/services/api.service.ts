import { Apollo, ApolloBase, gql } from 'apollo-angular';

import { ApolloQueryResult } from '@apollo/client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QueryInfo } from '@apollo/client/core/QueryInfo';

@Injectable()
export class ApiService {
  private apollo: any;

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('newClientName');
  }
  // ApolloQueryResult
  getPosts(query: QueryInfo): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query
    }).valueChanges;
  }
}

