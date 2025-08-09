import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register, login } from "../providers/dataProvider";

// Hook đăng ký user
export const useRegister = () => {
  return useMutation({
    mutationFn: (data: any) => register(data),
  });
};

// Hook đăng nhập user
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => login(data),
    onSuccess: (data) => {
      if (data?.data?.token) {
        localStorage.setItem("token", data.data.token);
      }
      queryClient.invalidateQueries({ queryKey: ["User"] });
    },
  });
};
