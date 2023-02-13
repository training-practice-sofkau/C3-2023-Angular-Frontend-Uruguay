import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModule } from './account/account.module';
import { ViewComponent } from './view/view.component';
import { UserAccountsComponent } from './view/lists/user-accounts/user-accounts.component';
import { SharedModule } from "../shared/shared.module";
import { LastMovementsCustomerComponent } from './view/lists/last-movements-customer/last-movements-customer.component';
import { CurrencyComponent } from './view/lists/currency/currency.component';
import { MonthlyExpensesComponent } from './view/lists/monthly-expenses/monthly-expenses.component';

@NgModule({
    declarations: [
        ViewComponent,
        UserAccountsComponent,
        LastMovementsCustomerComponent,
        CurrencyComponent,
        MonthlyExpensesComponent
    ],
    exports: [
        ViewComponent,
        UserAccountsComponent
    ],
    imports: [
        CommonModule,
        AccountModule,
        SharedModule
    ]
})
export class DashboardModule { }
