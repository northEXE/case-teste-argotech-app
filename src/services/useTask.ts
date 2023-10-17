import axios, { AxiosPromise } from "axios";
import { Task } from '../interface/Task';
import { useQuery } from "react-query";
import api from "./api";

const API_URL = 'http://10.0.2.2:8000/to-do-list';

const fetchData = async (): AxiosPromise<Task[]> => {
    const response = api.get('to-do-list');
    return response;
}

export function useTask(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['task-Data'],
        retry: 2    
    })
    return{
        ...query,
        data: query.data?.data
    }
}