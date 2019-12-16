export function buildURL(url: string, params?: any): string {
    if (!params) {
        return url
    }

    // 把params 变成数组，然后再拼接到url上
    const parts: string[] = [];

    // 遍历params
    Object.keys(params).forEach(key => {
        const val = params[key];
        if (val === null || typeof val === 'undefined') {
            // 如果值不存在，那就跳过 继续下一个循环
            return
        }
        let values = [];
        if (Array.isArray(val)) {
            values = val;
            key += '[]'
        } else {
            values = [val]
        }
        values.forEach(val=>{
            
        })
    })
}