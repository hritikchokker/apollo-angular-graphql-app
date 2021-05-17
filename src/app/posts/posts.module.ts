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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostsComponent } from './posts.component';
import { PostsHomeComponent } from './posts-home/posts-home.component';
import { PostsService } from './posts.service';
import { MatCardModule } from '@angular/material/card';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

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
      },
      {
        path: ':id/edit',
        component: PostEditComponent
      },
      {
        path: ':id',
        component: PostDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    PostsComponent,
    FeedsComponent,
    PostsHomeComponent,
    PostDetailComponent,
    PostEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
  ], providers: [PostsService]
})
export class PostsModule { }
