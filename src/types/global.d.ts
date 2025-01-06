interface Window {
  $notify: SFCInstallWithContext<Notify>;
  $message: SFCInstallWithContext<Message>;
  $alert: SFCWithInstall<IElMessageBox>;
}
declare const $message: SFCInstallWithContext<Message>;
declare module "mockjs";
declare module "nprogress";
declare module "qs";
