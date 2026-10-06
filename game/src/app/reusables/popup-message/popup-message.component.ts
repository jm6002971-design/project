import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-popup-message",
  templateUrl: "./popup-message.component.html",
  styleUrls: ["./popup-message.component.css"]
})

export class PopupMessageComponent implements OnInit {
  @Input() messageType: String = "ERROR_INFO";
  @Output() close = new EventEmitter<void>();
  constructor() {

  }

  ngOnInit() {
    
  }

  closePopupMessage() {
    this.close.emit()
  }

  getIconClass(type: String): String {
    switch (type) {
      case 'success': return 'fa-check-circle';
      case 'error': return 'fa-exclamation-circle';
      case 'warning': return 'fa-exclamation-triangle';
      case 'info': return 'fa-info-circle';
      default: return 'fa-info-circle';
    }
  }
}
