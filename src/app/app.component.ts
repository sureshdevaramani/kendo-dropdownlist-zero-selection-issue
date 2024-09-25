import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">Selected Value: {{ selectedValue }}</div>
    <kendo-dropdownlist
      [data]="listItems"
      [(ngModel)]="selectedValue" [valuePrimitive]="true"
      [valuePrimitive]="true" (selectionChange)="selectChange($event)"
      (opened)="opened()"
    >
    <ng-template kendoDropDownListValueTemplate let-dataItemDD>
      {{dataItemDD}}
    </ng-template>
    <ng-template kendoDropDownListItemTemplate let-dataItemDD>
      {{dataItemDD}}
    </ng-template>

  </kendo-dropdownlist>
  `,
  styles: [
    `
      kendo-dropdownlist {
        width: 170px;
      }
      ::ng-deep{

      }
    `,
  ],
})
export class AppComponent {
  public listItems: Array<number> = [0, 0.55, 0.66, 0.75, 1];
  public selectedValue = 0.55;

  selectChange(event) {
    console.log('event', event);
  }
  opened() {
    if (this.selectedValue == 0) {
      document
        .querySelectorAll('.k-list-item')
        .item(0)
        .classList.add('k-selected');
    }
  }
}
