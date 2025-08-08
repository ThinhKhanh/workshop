/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { update } from "../providers/dataProvider";

export const useUpdate = (resource: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data} : { id: any; data:any}) => update( resource, id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [resource] });
        }
    });
};