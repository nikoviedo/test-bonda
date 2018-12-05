import { Component, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "app-modal",
  styleUrl: "app-modal.css",
  shadow: true
})
export class AppModal {
  @Prop({
    mutable: true,
    reflectToAttr: true
  })
  public visible: boolean;

  @Prop()
  public title: string;

  @Event()
  private ok: EventEmitter;
  @Event()
  private cancel: EventEmitter;

  private handleCancelClick = () => {
    this.visible = false;
    this.cancel.emit();
  };

  private handleOkClick = () => {
    this.visible = false;
    this.ok.emit();
  };

  public render(): JSX.Element {
    const { visible, title, handleCancelClick, handleOkClick } = this;
    return (
      <div class={visible ? "app-modal-wrapper visible" : "app-modal-wrapper"}>
        <div class="app-modal">
          <div class="app-modal-header">
            <span>{title}</span>
          </div>
          <div class="app-modal-content">
            <slot />
          </div>
          <div class="app-modal-buttons">
            <button class="app-modal-cancel" onClick={handleCancelClick}>
              Cancel
            </button>
            <button class="app-modal-ok" onClick={handleOkClick}>
              Okay
            </button>
          </div>
        </div>
      </div>
    );
  }
}