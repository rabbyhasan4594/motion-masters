import { useQuery } from '@tanstack/react-query'

const usePopular = () => {
    const { isLoading, isError, data: popular=[], error } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const response = await fetch('https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/popular')
            
            return response.json()
        }
      })
    
      return [popular,isLoading]
};

export default usePopular;