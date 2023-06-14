import { useQuery } from '@tanstack/react-query';

const useClassesAndInstructors = () => {
    const { isLoading, isError, data: popular=[], error } = useQuery({
        queryKey: ['classesAndInstructors'],
        queryFn: async () => {
            const response = await fetch('https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/classesAndInstructorsApproved/')
            
            return response.json()
        }
      })
    
      return [popular,isLoading]
};

export default useClassesAndInstructors;