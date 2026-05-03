import request from '@/utils/request'

// 查询操作日志列表
export function list(query) {
  return request({
    url: '/monitor/operlog/list',
    method: 'get',
    params: query
  })
}

// 删除操作日志
export function delOperlog(operId) {
  return request({
    url: '/monitor/operlog/' + operId,
    method: 'delete'
  })
}

// 清空操作日志
export function cleanOperlog() {
  return request({
    url: '/monitor/operlog/clean',
    method: 'delete'
  })
}

// 导入操作日志模板下载
export function importTemplate() {
  return request({
    url: '/monitor/operlog/importTemplate',
    method: 'get',
    responseType: 'blob'
  })
}

// 导入操作日志
export function importData(file) {
  const formData = new FormData()
  formData.append('file', file)
  return request({
    url: '/monitor/operlog/importData',
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
