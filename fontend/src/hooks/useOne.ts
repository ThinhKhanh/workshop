/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getOne } from "../providers/dataProvider";

export const useOne = (resource: string, id: any) => {
    return useQuery({
        queryKey: [resource, id],
        queryFn: () => {
            return getOne(resource, id);
        }
    });
}