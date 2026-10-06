import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PopupMessageComponent } from "./popup-message.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PopupMessageComponent", () => {

  let fixture: ComponentFixture<PopupMessageComponent>;
  let component: PopupMessageComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PopupMessageComponent]
    });

    fixture = TestBed.createComponent(PopupMessageComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
