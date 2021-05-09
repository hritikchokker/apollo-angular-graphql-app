import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { FeedsComponent } from './feeds/feeds.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  declarations: [
    PostsComponent,
    FeedsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
  ], providers: [PostsService]
})
export class PostsModule { }
