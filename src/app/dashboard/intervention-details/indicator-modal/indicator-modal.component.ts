import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { map, tap } from 'rxjs/operators';
import { Indicator } from 'src/app/core/models/intervention.model';

@Component({
  selector: 'app-indicator-modal',
  templateUrl: './indicator-modal.component.html',
  styleUrls: ['./indicator-modal.component.scss']
})
export class IndicatorModalComponent {
  dataSource: MatTableDataSource<any>;

  displayedColumns = ['icon', 'name'];

  filter = new FormControl();

  private indicators: Indicator[] = [
    { name: 'Charge issue', icon: 'charging-station' },
    { name: 'Overheat', icon: 'burn' }
  ];

  constructor(private dialogRef: MatDialogRef<IndicatorModalComponent>) {
    this.dataSource = new MatTableDataSource(this.indicators);

    this.filter.valueChanges
      .pipe(map(value => value.trim().toLowerCase()))
      .pipe(tap(filterValue => (this.dataSource.filter = filterValue)))
      .subscribe();
  }

  selectIndicator(indicator: Indicator) {
    this.dialogRef.close(indicator);
  }
}
