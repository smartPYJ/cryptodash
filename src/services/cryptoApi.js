
import { createApi, fetchBaseQuery}  from '@reduxjs/toolkit/query/react';

const cryptoHeaders = {

          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': 'dd7249c5bamsh26fb5ce47c8d03fp10bc4bjsn48897094ba73'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

 
const createRequest = (url)=> ({ url, headers: cryptoHeaders })

export const cryptoApi = createApi({
 reducerPath: 'cryptoApi',
 baseQuery: fetchBaseQuery({ baseUrl}),
 endpoints: (builder) => ({
     getCryptos:builder.query({
         query:()=>  createRequest('/coins')
     })
 })

});

export const{
    useGetCryptosQuery 
} = cryptoApi;