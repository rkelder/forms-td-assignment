import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'forms-td-assignment';
  selectedSubscription = 'advanced';
  user = {
    email: '',
    subscription: this.selectedSubscription,
    password: '',
  };

  onSubmit() {
    console.log(this.user);
  }
}
