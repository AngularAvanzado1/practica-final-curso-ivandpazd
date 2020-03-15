import {ChangeDetectionStrategy, Component} from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

@Component({
  selector: "app-world-bank-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private swUpdate: SwUpdate) {
    this.checkVersionUpdates();
  }

  /**
   * Check version for new updates
   */
  public checkVersionUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        if (event.current.appData) {
          const appData: any = event.current.appData;
          let msg = `Nueva versión ${appData.version} disponible.`;
          msg += `${appData.changelog}.`;
          msg += '¿Actualizar ahora?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      });
    }
  }
}
