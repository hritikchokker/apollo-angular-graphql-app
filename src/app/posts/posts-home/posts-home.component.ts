import { Component, OnDestroy, OnInit } from '@angular/core';
import { GET_FEED, GET_POST, GET_POSTS_OF_AUTHOR } from '../queries';

import { LoggerService } from 'src/app/common/services/logger.service';
import { PostsService } from '../posts.service';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.scss']
})
export class PostsHomeComponent implements OnInit, OnDestroy {

  loading = true;
  posts: any;
  postsQuery!: QueryRef<any>
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
  }
  refresh() {
    this.postsQuery.refetch()
  }

  getAuthorsPost(authorId: number): void {
    this.authorPost$ = this.$postService.getAuthorsPost(GET_POSTS_OF_AUTHOR, authorId).pipe(map(data => {
      return data.data.postsOf[0];
    }));
  }
  ngOnDestroy(): void {
    this.querySubscription.forEach(subs => subs.unsubscribe());
  }
}
