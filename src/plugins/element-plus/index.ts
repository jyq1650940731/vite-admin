import { ElInput, ElMessage, ElMessageBox, ElNotification } from "element-plus";
import type { App } from "vue";
// const components = [ElButton, ElInput, ElMessage, ElMessageBox, ElNotification];

const ElInputProps = ElInput.props;
ElInputProps.clearable = { type: Boolean, default: true };
ElInputProps.maxlength = { type: Number, default: 50 };

export function setup(app: App<Element>) {
  console.log(app);
  // components.forEach((component) => {
  //   //调用component的install方法
  //   app.use(component);
  // });
  if (window) {
    window.$notify = ElNotification;
    window.$message = ElMessage;
    // window.$confirm = (message, title, options) => {
    //   if(!options.close)
    // };
    window.$alert = ElMessageBox.alert;
  }
  // console.log(window);
}
