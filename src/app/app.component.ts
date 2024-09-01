import { NgFor } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { burgers } from './constants/burgers';
import { Burger } from './constants/burger.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, MatDialogModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('orderContainer') orderContainer: ElementRef | undefined;
  @ViewChild('orderInput') orderInput: ElementRef | undefined;

  dialog = inject(MatDialog)

  title = 'burger';
  menuItems = ['Почему у нас', 'Меню бургеров', 'Оформление заказа'];
  burgers: Burger[] = burgers;

  orderClick(burgerName: string) {
    this.orderContainer?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    console.log(burgerName);
    const input = this.orderInput?.nativeElement as HTMLInputElement;
    input.value = burgerName;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent)
  }
}
