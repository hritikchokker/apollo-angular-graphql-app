import { Component, OnInit } from '@angular/core';

import { GET_FEED } from '../queries';
import { LoggerService } from 'src/app/common/services/logger.service';
import Observable from 'zen-observable';
import { PostsService } from '../posts.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  feed$!: Observable<any>;
  isLoading = true;
  constructor(
    private $postService: PostsService,
    private $logger: LoggerService
  ) { }

  ngOnInit(): void {
    this.getFeeds();
  }

  getFeeds(): void {
    this.feed$ = this.$postService.getFeed(GET_FEED).pipe(map((res: any) => {
      const { data, loading } = res;
      this.isLoading = loading;
      this.$logger.log(this.isLoading, 'loading status')
      return data;
    })) as any;
  }
}
