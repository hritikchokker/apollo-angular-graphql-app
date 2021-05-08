import { ApolloQueryResult, gql } from '@apollo/client/core';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

const GET_POST = gql`
  query GetPosts {
    posts {
      id
      title
    }
  }
`;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  loading!: boolean;
  posts: any;
  apollo!: any;
  private querySubscription: Subscription = new Subscription();

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('newClientName');
  }

  ngOnInit(): void {
    this.querySubscription = this.apollo.watchQuery({
      query: GET_POST
    })
      .valueChanges
      .subscribe(({ data, loading }: any) => {
        this.loading = loading;
        this.posts = data.posts;
      });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

}
