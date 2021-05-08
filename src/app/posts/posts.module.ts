import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], providers: [PostsService]
})
export class PostsModule { }
