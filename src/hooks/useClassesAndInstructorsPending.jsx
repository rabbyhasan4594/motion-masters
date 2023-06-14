import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClassesAndInstructorsPending = () => {
    const { isLoading, isError, data: users=[], error,refetch } = useQuery({
        queryKey: ['classesAndInstructors'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/classesAndInstructors/')
            
            return response.json()
        }
      })
    
      return [users,isLoading,refetch]
};

export default useClassesAndInstructorsPending;