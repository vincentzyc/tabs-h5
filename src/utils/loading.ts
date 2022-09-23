import { showLoadingToast, closeToast } from 'vant';
import 'vant/es/toast/style';

export function openLoading(text?: string): void {
  showLoadingToast({
    message: text || '',
    duration: 0,       // 持续展示 toast
    forbidClick: true, // 禁用背景点击
  });
}

export function closeLoading(): void {
  closeToast();
}