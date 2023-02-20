import {useClient} from 'sanity'

const useVersionedClient = () => useClient({apiVersion: '2022-10-01',  })

export default useVersionedClient
