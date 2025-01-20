import { init } from "vel-monitor";
export function setup() {
  const isMonitor = true;
  if (isMonitor)
    init({
      appId: "xxx",
      userId: "123",
      reportUrl: "1234",
      autoTracker: true,
      delay: 100,
      hashPage: true,
      errorReport: true,
    });
}
