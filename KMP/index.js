function compNext(needle) {
  const next = [0];
  for (let i = 1; i < needle.length; i++) {
    // j表示目前为止(不包括[i])相同前后缀的长度
    let j = next[i - 1];
    // 查表 跳到能继续下去的更短的前后缀
    while (needle[i] != needle[j] && j > 0) j = next[j - 1];
    // 判断
    if (needle[i] == needle[j]) {
      next[i] = j + 1;
    } else {
      next[i] = 0;
    }
  }
  return next;
}

function kmp(a, b) {
  let j = 0;
  let i = 0;
  const next = compNext(b);
  while (i < a.length) {
    if (a[i] === b[j]) {
      i += 1;
      j += 1;
    } else if (j > 0) {
      j = next[j - 1];
    } else {
      i += 1
    }
    if (j === b.length) {
      return i - j
    }
  }
  return -1
}

console.log('kmp() :>> ', kmp('ababcaababcaabc', 'ababcaabc'));