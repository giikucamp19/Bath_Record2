import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useError } from '../hooks/useError';
import { useMutation } from '@tanstack/react-query';

export const useMutateAuth = () => {
  const navigate = useNavigate();
  const { switchErrorHandling } = useError();

  const loginMutation = useMutation({
    mutationFn: async (user) => {
      
      const response = await axios.post(`/api/login`, user);
      return response.data;
    },
    onSuccess: () => {
      navigate('/home');
    },
    onError: (err) => {
      if (err.response?.data?.message) {
        switchErrorHandling(err.response.data.message);
      } else {
        switchErrorHandling(err.response?.data || 'An unexpected error occurred');
      }
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (user) => {
      const formData = new FormData();
      formData.append('email', user.email);
      formData.append('password', user.password);
      formData.append('accountName', user.accountName);
      if (user.icon) {
        formData.append('icon', user.icon); 
      }
      const response = await axios.post(`/api/signup`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
      });
      return response.data;
    },
    onError: (err) => {
      if (err.response?.data?.message) {
        switchErrorHandling(err.response.data.message);
      } else {
        switchErrorHandling(err.response?.data || 'An unexpected error occurred');
      }
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post(`/api/logout`);
      return response.data;
    },
    onSuccess: () => {
      navigate('/');
    },
    onError: (err) => {
      if (err.response?.data?.message) {
        switchErrorHandling(err.response.data.message);
      } else {
        switchErrorHandling(err.response?.data || 'An unexpected error occurred');
      }
    },
  });

  return { loginMutation, registerMutation, logoutMutation };
};
