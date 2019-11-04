export function urlByAppendingParams(url, params) {
  let result = url;
  if (result.substr(result.length - 1) != '?') {
    result = result + '?';
  }
  // 遍历参数
  for (let key in params) {
    let value = params[key];
    result += `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  }
  result = result.substring(0, result.length - 1);
  return result;
}
