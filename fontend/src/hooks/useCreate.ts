/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { create } from "../providers/dataProvider";

export const useCreate = (resource: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: any) => create(resource, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [resource]});
        }
    });
};