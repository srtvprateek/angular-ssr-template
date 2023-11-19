import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  data = {
    name: 'Angular SSR Template',
    bio: 'This is a template repo for creating Angular SR project.',
    image: 'avatar.png'
  };
  protected readonly environment = environment;

  constructor(private title: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      {name: 'twitter:card', content: this.data.name},
      {name: 'og:url', content: '/index'},
      {name: 'og:title', content: this.data.name},
      {name: 'og:description', content: this.data.bio},
      {name: 'og:image', content: this.data.image}
    ]);
  }
}
