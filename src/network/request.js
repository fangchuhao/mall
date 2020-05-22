import axios from 'axios'

export function get(uri,params) {
  const instance=axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err)
      return err
    }
  )
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      console.log(err)
      return err
    }
  )

  return instance.get(uri,params)
}

