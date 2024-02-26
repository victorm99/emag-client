import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  openErrorSnackbar(message: string, type: string) {
    this.snackbar.open(message, '', {
      duration: 2000,
      panelClass: ['snackbar-' + type],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
