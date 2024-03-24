import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
    AvatarModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    NavModule,
    ProgressModule,
    TableModule,
    TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { DatasourceRoutingModule } from './datasource-routing.module';
import { DatasourceComponent } from './datasource.component';
import { OrderComponent } from '../order/order.component';
import { ProductPriceComponent } from '../product-price/product-price.component';

import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
    imports: [
        DatasourceRoutingModule,
        CardModule,
        NavModule,
        IconModule,
        TabsModule,
        CommonModule,
        GridModule,
        ProgressModule,
        ReactiveFormsModule,
        ButtonModule,
        FormModule,
        ButtonModule,
        ButtonGroupModule,
        ChartjsModule,
        AvatarModule,
        TableModule,
        WidgetsModule,
        OrderComponent,
        ProductPriceComponent
    ],
    declarations: [DatasourceComponent]
})
export class DatasourceModule {
}
