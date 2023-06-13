
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMyClasses = () => {
    const { user } = useAuth();

    const { refetch, data: myClasses = [] } = useQuery({
        queryKey: ['myClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myClasses?email=${user?.email}`)
            return res.json();
        },
    })

    return [myClasses, refetch]

};

export default useMyClasses;