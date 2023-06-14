import { useQuery } from '@tanstack/react-query';

const useClassesAndInstructors = () => {
    const { isLoading, isError, data: popular=[], error } = useQuery({
        queryKey: ['classesAndInstructors'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/classesAndInstructorsApproved/')
            
            return response.json()
        }
      })
    
      return [popular,isLoading]
};

export default useClassesAndInstructors;