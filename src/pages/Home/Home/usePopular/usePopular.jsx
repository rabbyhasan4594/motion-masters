import { useQuery } from '@tanstack/react-query'

const usePopular = () => {
    const { isLoading, isError, data: popular=[], error } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/popular')
            
            return response.json()
        }
      })
    
      return [popular,isLoading]
};

export default usePopular;