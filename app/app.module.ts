import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { ChildComponent } from './child.component';

import { TagPipe } from './pipe/tag.pipe';
import { FilterPipe } from './pipe/filter.pipe';



@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    // Components
    AppComponent,
    ChildComponent,

    // Pipes
    TagPipe,
    FilterPipe
  ],
  bootstrap: [AppComponent],
  providers: [UserService]
})

export class AppModule {
}
