import { ApolloQueryResult, Observable, gql } from '@apollo/client/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GET_FEED, GET_POST, GET_POSTS_OF_AUTHOR } from './queries';

import { Apollo } from 'apollo-angular';
import { LoggerService } from '../common/services/logger.service';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  loading = true;
  posts: any;
  apollo!: any;
  private querySubscription: Subscription[] = [];
  authorPost$!: any;
  constructor(
    // private apolloProvider: Apollo,
    public $postService: PostsService,
    private $logger: LoggerService
  ) {
    // this.apollo = this.apolloProvider.use('graphqlHeroku');
  }

  ngOnInit(): void {
    this.querySubscription.push(
      this.$postService.getPosts(GET_POST)
        .subscribe(({ data, loading }: any) => {
          this.loading = loading;
          this.posts = data.posts;
        })
    );
    this.getFeeds();
  }

  getAuthorsPost(authorId: number): void {
    this.authorPost$ = this.$postService.getAuthorsPost(GET_POSTS_OF_AUTHOR, authorId).pipe(map(data => {
      return data.data.postsOf[0];
    }));
  }

  getFeeds(): void {
    this.$postService.getFeed(GET_FEED)
      .subscribe((data: any) => {
        this.$logger.log(data, 'data feed');
      });
  }

  ngOnDestroy(): void {
    this.querySubscription.forEach(subs => subs.unsubscribe());
  }

}
