import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Cumulative Layout Shift (CLS):衡量视觉稳定性，为了提供良好的用户体验，页面的CLS应保持小于 0.1。
      getFID(onPerfEntry); // First Input Delay (FID): 衡量可交互性，为了提供良好的用户体验，页面的 FID 应当小于 100毫秒。
      getFCP(onPerfEntry); // First Contentful Paint（FCP） 可以衡量对网站加载速度对第一印象 。
      getLCP(onPerfEntry); // Largest Contentful Paint (LCP): 衡量加载体验：为了提供良好的用户体验， LCP 应该在页面首次开始加载后的 2.5 秒内发生。
      getTTFB(onPerfEntry); // 首字节相应时间（TTFB）是最初的网络请求被发起到从服务器接收到第一个字节这段时间，它包含了 TCP 连接时间，发送 HTTP 请求时间和获得响应消息第一个字节的时间。
    });
  }
};

export default reportWebVitals;
