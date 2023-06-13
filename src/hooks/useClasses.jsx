import { useQuery } from '@tanstack/react-query'

import useAuth from './useAuth';
const useClasses = () => {
    const { user } = useAuth();

    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selected?email=${user?.email}`)
            return res.json();
        },
    })

    return [selected, refetch]

}
export default useClasses;