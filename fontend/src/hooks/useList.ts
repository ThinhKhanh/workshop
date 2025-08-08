import { useQuery } from "@tanstack/react-query";
import { getList } from "../providers/dataProvider";

export const useList = (resource: string) => {
    return useQuery({
        queryKey: [resource],
        queryFn: () => {
            return getList(resource);
        }
    });
}