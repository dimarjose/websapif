import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
// import { OutsideClickDirective } from "./directives/directives/click-outside.directive";
import { PrimengModule } from "./primeng/primeng.module";

@NgModule({
  declarations: [
    // OutsideClickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // OutsideClickDirective,
    PrimengModule,
    ReactiveFormsModule],
})
export class SharedModule { }
