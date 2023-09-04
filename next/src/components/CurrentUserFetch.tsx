import axios, { AxiosResponse, AxiosError } from 'axios'
import { useEffect } from 'react'
import { useUserState } from '@/hooks/useGlobalState'

const CurrentUserFetch = () => {
  const [user, setUser] = useUserState()

  useEffect(() => {
    if (user.isFetched) {
      return
    }

    if (localStorage.getItem('access-token')) {
      const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/user'
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            'access-token': localStorage.getItem('access-token'),
            client: localStorage.getItem('client'),
            uid: localStorage.getItem('uid'),
          },
        })
        .then((res: AxiosResponse) => {
          setUser({
            ...user,
            ...res.data,
            isSignedIn: true,
            isFetched: true,
          })
        })
        .catch((err: AxiosError<{ error: string }>) => {
          console.log(err.message)
          setUser({
            ...user,
            isFetched: true,
          })
        })
    } else {
      setUser({
        ...user,
        isFetched: true,
      })
    }
  }, [user, setUser])

  return <></>
}

export default CurrentUserFetch
