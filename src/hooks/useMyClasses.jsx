
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMyClasses = () => {
    const { user } = useAuth();

    const { refetch, data: myClasses = [] } = useQuery({
        queryKey: ['myClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/myClasses?email=${user?.email}`)
            return res.json();
        },
    })

    return [myClasses, refetch]

};

export default useMyClasses;