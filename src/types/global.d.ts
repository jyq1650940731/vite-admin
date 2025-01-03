interface Window {
  $notify: SFCInstallWithContext<Notify>;
  $message: SFCInstallWithContext<Message>;
  $alert: SFCWithInstall<IElMessageBox>;
}
declare const $message: SFCInstallWithContext<Message>;
