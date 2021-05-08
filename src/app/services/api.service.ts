import { Apollo, ApolloBase, gql } from 'apollo-angular';

import { ApolloQueryResult } from '@apollo/client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
class ApiService {
  private apollo: ApolloBase;

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('newClientName');
  }
  // ApolloQueryResult
  // getData(): Observable<any> {
  //   return this.apollo.watchQuery({
  //     query: gql`
  //       {
  //         rates(currency: "USD") {
  //           currency
  //           rate
  //         }
  //       }
  //     `,

  // }
}