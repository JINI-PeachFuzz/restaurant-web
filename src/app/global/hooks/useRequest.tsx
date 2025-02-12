'use client'
import useSWR from 'swr'
import { fetcher } from '../libs/utils'

export default function useRequest(url) {
  return useSWR(url, fetcher)
}
// 상태바뀔때마다 다시 로딩하는거라던지 이전에 개발자들이 하던걸 편하게 사용할 수 있게 훅에 추가해놓은 거 / 사용자 정의 훅임!
