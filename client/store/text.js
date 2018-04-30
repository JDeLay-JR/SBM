import axios from 'axios'


export function broadcastTextMessage (text) {
  return function thunk() {
    return axios.post('/api/text/broadcast', text)
    .then(res => console.log(res.data))
  }
}

export function postSingleText (text) {
  console.log('Hit singleTextFunction')
  return function thunk() {
    console.log('hit thunk')
    return axios.post('/api/text/singleText', text)
    .then(res => console.log(res.data))
  }
}

