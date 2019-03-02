import { IOpenOverlayConfig, openOverlay } from "../behavior/overlay/open-overlay";
import { DialogElement, IDialogElementBaseProperties } from "./dialog-element";

export function openDialog<R> (config: IOpenOverlayConfig & Partial<IDialogElementBaseProperties>) {
	return openOverlay(config, () => new DialogElement<R>());
}