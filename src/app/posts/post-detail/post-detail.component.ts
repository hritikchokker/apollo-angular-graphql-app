import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  postId!: string;
  postDetails: any;
  isLoading = true;
  constructor(
    private $postService: PostsService,
    private $route: ActivatedRoute
  ) {
    this.subscription.push(
      this.$route.params.subscribe(({ id }: any) => {
        this.postId = id;
        this.fetchPostDetails();
      })
    );
  }

  fetchPostDetails(): void {
    this.subscription.push(
      this.$postService.fetchPostDetail(this.postId)
        .subscribe(data => {
          this.isLoading = false;
          if (data && data.length > 0) {
            this.postDetails = data[0];
          }
        })
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subs => subs.unsubscribe());
  }

}
