import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnDestroy, Output } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { Color } from "../shared/enum/enumPlayer";
import { ChessboardComponent } from "../components/chessboard/chessboard.component";
import { Subject } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-menu-option",
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ChessboardComponent,
  ],
  templateUrl: "./menu-option.component.html",
  styleUrl: "./menu-option.component.scss",
})
export class MenuOptionComponent {
  color?: Color;

  form: UntypedFormGroup;
  readonly options = {
    modeToPlay: {
      title: "modeToPlay",
      choices: {
        pcVsHuman: "pcVsHuman",
        humanVsHuman: "humanVsHuman",
      },
    },
    colorHuman: {
      title: "colorHuman",
      choices: {
        red: "red",
        blue: "blue",
      },
    },
    degreeOfDifficult: {
      title: "degreeOfDifficult",
      choices: {
        low: "low",
        medium: "medium",
        hight: "hight",
      },
    },
    choiceLanguage: {
      title: "choiceLanguage",
      choices: {
        it: "it",
        en: "en",
      },
    },
  };
  readonly getOptions = Object.values(this.options);
  isClicked?: Color; //TODO rename the variable name
  @Output() colorChoose = new EventEmitter<Color>();
  @Output() systemLanguage = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      modeToPlay: new UntypedFormControl("", [Validators.required]),
      colorHuman: new UntypedFormControl("", [Validators.required]),
      degreeOfDifficult: new UntypedFormControl("low", [Validators.required]),
      choiceLanguage: new UntypedFormControl("it", [Validators.required]),
    });

    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe((status) => {
      this.systemLanguage.emit(status.choiceLanguage);
    });
  }

  choosePlayerColor(): void {
    if (this.form.valid) {
      const optionFromUser = this.form.getRawValue();
      this.isClicked = optionFromUser["colorHuman"];
      this.confirm();
    }
  }

  reset() {
    this.form.reset({degreeOfDifficult: "low", choiceLanguage: "it"});
  }

  private confirm(): void {
    if (this.isClicked !== undefined) {
      this.colorChoose.emit(this.isClicked);
    }
  }
}
