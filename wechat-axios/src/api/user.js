import http from '@/utils/http';

// 这里只是示例对接接口，并不进行真实请求，根据您需要的后端接口进行跟换即可
// 在需要的使用页面中使用React.useEffect hooks触发

export function getUserInfo() {
    return http({
        url: '/api/user/info'
    });
}
