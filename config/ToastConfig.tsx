import { Colors } from "@/constants/Colors";
import {
  BaseToast,
  ToastConfig as IToastConfig,
} from "react-native-toast-message";

const borderRadius = 8;
const text1FontSize = 14;
const text2FontSize = 12;

export const ToastConfig: IToastConfig = {
  error: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftWidth: 0 }}
      contentContainerStyle={{
        backgroundColor: Colors.status.error,
        borderRadius: borderRadius,
      }}
      text1Style={{ color: Colors.text.white, fontSize: text1FontSize }}
      text2Style={{ color: Colors.text.white, fontSize: text2FontSize }}
    />
  ),
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftWidth: 0 }}
      contentContainerStyle={{
        backgroundColor: Colors.status.success,
        borderRadius: borderRadius,
      }}
      text1Style={{ color: Colors.text.white, fontSize: text1FontSize }}
      text2Style={{ color: Colors.text.white, fontSize: text2FontSize }}
    />
  ),
  info: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftWidth: 0 }}
      contentContainerStyle={{
        backgroundColor: Colors.status.info,
        borderRadius: borderRadius,
      }}
      text1Style={{ color: Colors.text.white, fontSize: text1FontSize }}
      text2Style={{ color: Colors.text.white, fontSize: text2FontSize }}
    />
  ),
};
