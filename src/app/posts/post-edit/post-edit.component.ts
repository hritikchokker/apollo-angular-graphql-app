import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  postForm!: FormGroup;
  postId!: string;
  postDetails: any;
  isLoading = true;
  constructor(
    private $postService: PostsService,
    private $fb: FormBuilder,
    private $route: ActivatedRoute
  ) {
    this.subscription.push(
      this.$route.params.subscribe(({ id }: any) => {
        this.postId = id;
        this.fetchPostDetails();
      })
    );
    this.createForm();
  }

  createForm(): void {
    this.postForm = this.$fb.group({
      id: [''],
      title: [''],
      votes: ['']
    });
  }

  fetchPostDetails(): void {
    this.subscription.push(
      this.$postService.fetchPostDetail(this.postId)
        .subscribe(data => {
          this.isLoading = false;
          if (data && data.length > 0) {
            this.postDetails = data[0];
            this.postForm.patchValue({ ...this.postDetails });
            this.postForm.controls.id.disable();
          }
        })
    );
  }

  onSubmit(): void {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subs => subs.unsubscribe());
  }

}
