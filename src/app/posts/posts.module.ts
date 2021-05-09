import {
  RouterModule,
  Routes
} from '@angular/router';

import { CommonModule } from '@angular/common';
import { FeedsComponent } from './feeds/feeds.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostsHomeComponent } from './posts-home/posts-home.component';
import { PostsService } from './posts.service';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: '',
        component: PostsHomeComponent
      },
      {
        path: 'feeds',
        component: FeedsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    PostsComponent,
    FeedsComponent,
    PostsHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
  ], providers: [PostsService]
})
export class PostsModule { }
