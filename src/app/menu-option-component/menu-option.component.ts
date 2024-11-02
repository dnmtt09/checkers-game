import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
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
  playerIsReadyToGame: boolean = false;
  color?: Color;
  optionFromUser?: Record<string, string>;

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
  @Output() colorChoose: EventEmitter<Color> = new EventEmitter<Color>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      modeToPlay: new UntypedFormControl("", [Validators.required]),
      colorHuman: new UntypedFormControl("", [Validators.required]),
      degreeOfDifficult: new UntypedFormControl("low", [Validators.required]),
      choiceLanguage: new UntypedFormControl("it", [Validators.required]),
    });
  }

  choosePlayerColor(): void {
    if (this.form.valid) {
      const optionFromUser = this.form.getRawValue();
      this.isClicked = optionFromUser["colorHuman"];
      console.log(typeof this.isClicked);
      this.confirm();
    }
  }

  reset() {
    this.form.reset();
  }

  private confirm(): void {
    if (this.isClicked !== undefined) {
      this.colorChoose.emit(this.isClicked);
    }
  }
}
