/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteOne } from "../providers/dataProvider";

export const useDelete = (resource: string) => {
    const queryClient = useQueryClient();
     return useMutation({
        mutationFn: (id: any) => deleteOne(resource, id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [resource] });
        }
     })
}