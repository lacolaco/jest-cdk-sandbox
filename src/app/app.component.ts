import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  overlayRef = this.overlay.create({
    positionStrategy: this.overlay.position().global(),
    hasBackdrop: true,
  });

  constructor(private overlay: Overlay) {}

  showOverlay() {
    const portal = new ComponentPortal(OverlayContentComponent);

    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });

    this.overlayRef.attach(portal);
  }
}

@Component({
  template: ` <div>this is overlay content</div>`,
  host: {
    class: 'overlay-content',
  },
})
export class OverlayContentComponent {}
