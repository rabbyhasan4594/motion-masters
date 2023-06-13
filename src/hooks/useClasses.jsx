import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const useClasses = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/selected?email=${user?.email}`)
            return res.json();
        },
    })

    return [selected, refetch]

}
export default useClasses;