const maxlen = 10000
const list = document.querySelector('#list')
for (var i = 1; i <= maxlen; i++) {
    let dom = document.createElement('div')
    dom.innerHTML = `<span>这是第 ${i} 条数据</span>`
    list.append(dom)
    // prdom.innerHTML = '进度' + (i / maxlen * 100) + '%'
}